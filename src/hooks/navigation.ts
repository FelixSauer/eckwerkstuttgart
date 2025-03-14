import { getCollection } from "astro:content";
import type { INavigation } from "@/types/navigation";

export async function getNavigation() {
	const pages = await getCollection("pages");

	const navigation: INavigation[] = pages.map(
		(page: any): INavigation => ({
			page: page,
			title: page.data.title,
			navigation: page.data.navigation,
			slug: page.slug
		})
	);

	const navigationHeader = navigation.filter((nav) =>
		nav.navigation?.includes("Header")
	);

	const navigationFooter = navigation.filter((nav) =>
		nav.navigation?.includes("Footer")
	);

	return { navigationHeader, navigationFooter };
}
