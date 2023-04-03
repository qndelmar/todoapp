import {FC} from "react";
import {Prompt} from "next/font/google";
import {Secular_One} from "next/font/google";

const prompt = Prompt({subsets: ['latin'], weight: '400'});
const secular = Secular_One({subsets: ['latin'], weight: '400'});

const Article:FC = () => {
    return (
        <div className="mt-2 dark:text-white select-text">
            <p className={`${secular.className} text-center md:text-left uppercase mt-8 text-3xl`}>Pomodoro timer</p>
            <article className={`${prompt.className} text-center md:text-left w-full sm:w-96`}>
                The Pomodoro timer is a tool used in the Pomodoro Technique, a time management method that involves breaking work into 25-minute intervals, followed by short breaks. It helps keep track of the intervals and ensures that you stick to the 25-minute work periods. By breaking your work into smaller intervals and taking regular breaks, you can stay focused and get more done in less time.
                You can use it on this website for free everyday!
            </article>
        </div>
    );
};

export default Article;