const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
	try {
		await database.category.createMany({
			data: [
				{ name: "Computer Science" },
				{ name: "Fitness" },
				{ name: "Photo" },
				{ name: "Cinema" },
				{ name: "Engineering" },
				{ name: "Food" },
			],
		});
	} catch (error) {
		console.log("Error seeding the database categories", error);
	} finally {
		await database.$disconnect();
	}
}

main();
