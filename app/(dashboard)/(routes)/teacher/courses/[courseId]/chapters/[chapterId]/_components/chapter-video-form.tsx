"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, VideoIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Chapter, MuxData } from "@prisma/client";
import { FileUpload } from "@/components/file-upload";
import Image from "next/image";

interface ChapterVideoFormProps {
	initialData: Chapter & { muxData?: MuxData | null };
	courseId: string;
	chapterId: string;
}

const formSchema = z.object({
	videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
	initialData,
	courseId,
	chapterId,
}: ChapterVideoFormProps) => {
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((current) => !current);

	const router = useRouter();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);
		try {
			await axios.patch(
				`/api/courses/${courseId}/chapters/${chapterId}`,
				values
			);
			toast.success("Chapter Updated");
			toggleEdit();
			router.refresh();
		} catch {
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="mt-6 border bg-card rounded-md p-4 chapter-video-form">
			<div className="font-medium flex items-center justify-between">
				Chapter Video
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing && <>Cancel</>}
					{!isEditing && !initialData.videoUrl && (
						<>
							<PlusCircle className="h-4 w-4 mr-2" />
							Add an Video
						</>
					)}
					{!isEditing && initialData.videoUrl && (
						<>
							<Pencil className="h-4 w-4 mr-2" />
							Edit video
						</>
					)}
				</Button>
			</div>
			{!isEditing && !initialData.videoUrl ? (
				<div className="flex items-center justify-center h-60 bg-background rounded-md">
					<VideoIcon className="h-10 w-10 text-slate-500" />
				</div>
			) : (
				<div className="relative aspect-video mt-2">
					<MuxPlayer playbackId={initialData?.muxData?.playbackId || ""} />
				</div>
			)}
			{isEditing && (
				<div>
					<FileUpload
						endPoint="chapterVideo"
						onChange={(url) => {
							if (url) {
								onSubmit({ videoUrl: url });
							}
						}}
					/>
					<div className="text-ms text-muted-foreground mt-4">
						Upload this chapter&apos;s video
					</div>
				</div>
			)}
			{initialData.videoUrl && !isEditing && (
				<div className="text-ms text-muted-foreground mt-2">
					Videos can take a few minutes to process. Refresh the page if the
					video does not appear
				</div>
			)}
		</div>
	);
};
