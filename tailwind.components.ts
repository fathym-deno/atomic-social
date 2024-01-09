export default [
	{
		Root: import.meta.resolve("./"),
		Components: [
			"./src/organisms/FeedCard.tsx",
			"./src/organisms/FeedCardList.tsx",
			"./src/organisms/PostForm.tsx",
			"./src/organisms/PostWithFeed.tsx",
			"./src/organisms/ProfileDisplay.tsx",
		],
	},
];