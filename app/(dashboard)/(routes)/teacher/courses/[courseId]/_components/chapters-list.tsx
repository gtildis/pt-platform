"use client";

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";

import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from "@hello-pangea/dnd";

import { cn } from "@/lib/utils";
import { Grip, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChapterListProps {
	items: Chapter[];
	onReorder: (updateData: { id: string; position: number }[]) => void;
	onEdit: (id: string) => void;
}

export const ChaptersList = ({
	items,
	onReorder,
	onEdit,
}: ChapterListProps) => {
	const [isMounted, setIsMounted] = useState(false);
	const [chapters, setChapters] = useState(items);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		setChapters(items);
	}, [items]);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const items = Array.from(chapters);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		const startIndex = Math.min(result.source.index, result.destination.index);
		const endIndex = Math.max(result.source.index, result.destination.index);

		const updatedChapters = items.slice(startIndex, endIndex + 1);

		setChapters(items);

		const bulkUpdatedData = updatedChapters.map((chapter) => ({
			id: chapter.id,
			position: items.findIndex((item) => item.id === chapter.id),
		}));

		onReorder(bulkUpdatedData);
	};

	if (!isMounted) {
		return null;
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="chapters">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{chapters.map((chapter, index) => (
							<Draggable
								key={chapter.id}
								draggableId={chapter.id}
								index={index}
							>
								{(provided) => (
									<div
										className={cn(
											"flex items-center gap-x-2 bg-background border text-slate-100 rounded-md mb-4 text-sm chapters-list",
											chapter.isPublished &&
												"bg-background border chapters-list"
										)}
										ref={provided.innerRef}
										{...provided.draggableProps}
									>
										<div
											className={cn(
												"px-2 py-3 border-r border-r-slate-200 hover:bg-muted/50 rounded-l-md transition",
												chapter.isPublished &&
													"hover:bg-muted/50 border-r-sky-200"
											)}
											{...provided.dragHandleProps}
										>
											<Grip className="h-5 w-5" />
										</div>
										{chapter.title}
										<div className="ml-auto pr-2 flex items-center gap-x-2">
											{chapter.isFree && <Badge>FREE</Badge>}
											<Badge
												className={cn(
													"bg-slate-500",
													chapter.isPublished && "bg-success/50"
												)}
											>
												{chapter.isPublished ? "Published" : "Draft"}
											</Badge>
											<Pencil
												className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
												onClick={() => onEdit(chapter.id)}
											/>
										</div>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
