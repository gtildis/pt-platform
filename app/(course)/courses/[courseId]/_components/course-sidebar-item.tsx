"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface CourseSidebarItemProps {
	label: string;
	id: string;
	isCompleted: boolean;
	courseId: string;
	isLocked: boolean;
}

export const CourseSidebarItem = ({
	label,
	id,
	isCompleted,
	courseId,
	isLocked,
}: CourseSidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;

	const isActive = pathname?.includes(id);

	const onClick = () => {
		router.push(`/courses/${courseId}/chapters/${id}`);
	};

	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-white/50 hover:bg-primary/70",
				isActive &&
					"text-white bg-primary/40 hover:bg-primary/70 hover:text-white/50",
				isCompleted && "text-success hover:text-success",
				isCompleted && isActive && "bg-emerald-200/20"
			)}
		>
			<div className="flex items-center p-4 gap-x-2 course-sidebar-item">
				<Icon
					size={22}
					className={cn(
						"text-white",
						isActive && "text-white",
						isCompleted && "text-success"
					)}
				/>
				{label}
			</div>
			<div
				className={cn(
					"ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
					isActive && "opacity-100",
					isCompleted && "border-emarald-700"
				)}
			/>
		</button>
	);
};
