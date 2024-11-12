import {SharedHero} from "@/components/shared-hero";
import {BlogArea} from "@/app/blog/blog-area";

export default function BlogPage() {
    return (
        <>
            <SharedHero sectionHeader={"Latest News"} sectionText={"Blog"} />
            <BlogArea />
        </>
    )
}