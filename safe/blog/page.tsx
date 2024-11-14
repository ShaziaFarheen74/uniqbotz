import {SharedHero} from "@/components/shared-hero";
import {BlogArea} from "@/safe/blog/blog-area";

export default function BlogPage() {
    return (
        <>
            <SharedHero sectionHeader={"Latest News"} sectionText={"Blog"} />
            <BlogArea />
        </>
    )
}