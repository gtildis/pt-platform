import { db } from "@/lib/db";
import Categories from "./_categories/categories";
import SearchInput from "@/components/search-input";

const SearchPage = async () => {
	const catergories = await db.category.findMany({
		orderBy: {
			name: "asc",
		},
	});

	return (
		<>
			<div className="p-6 pt-6 md:hidden md:mb-0 block">
				<SearchInput />
			</div>
			<div className="p-6">
				<Categories items={catergories} />
			</div>
		</>
	);
};

export default SearchPage;
