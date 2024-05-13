import { db } from "@/lib/db";
import Categories from "./_categories/categories";
import SearchInput from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CoursesList } from "@/components/courses-list";

interface SearchPageProps {
	searchParams: {
		title: string;
		categoryId: string;
	};
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
	const { userId } = auth();

	if (!userId) {
		return redirect("/");
	}

	const catergories = await db.category.findMany({
		orderBy: {
			name: "asc",
		},
	});

	const courses = await getCourses({
		userId,
		...searchParams,
	});

	return (
		<>
			<div className="p-6 pt-6 md:hidden md:mb-0 block search-container">
				<SearchInput />
			</div>
			<div className="p-6 space-y-4 bg-background browse-container">
				<Categories items={catergories} />
				<CoursesList items={courses} />
			</div>
		</>
	);
};

export default SearchPage;
