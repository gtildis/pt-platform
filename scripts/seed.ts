const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
	try {
		await database.category.createMany({
			data: [
				{ name: "Muscle hypertrophy" },
				{ name: "Mobility conditioning" },
				{ name: "Fat loss" },
				{ name: "Hiit workout" },
				{ name: "Cardiovascular adjustments" },
				{ name: "Body weight exercises" },
			],
		});
	} catch (error) {
		console.log("Error seeding the database categories", error);
	} finally {
		await database.$disconnect();
	}
}

main();
