import Hero from "./component/Hero";
import HomeSkill from "./component/homeSkill";
import HomeAbout from "./component/homeAbout";
import HomeProjects from "./component/homeProjects";

export default function Home() {
    return (
        <main>
            <Hero/>
            <HomeAbout/>
            <HomeSkill/>
            <HomeProjects/>
        </main>
    );
}


