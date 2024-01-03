import React from 'react';

const SkillsModule = () => {
    const skillsData = [
        {firstLabel: 'User experience design - Ui/Ux', secondLabel: 'Delight the user and make it work'},
        {firstLabel: 'Web and user interface design - development', secondLabel: 'Websites, web experiences'},
        {firstLabel: 'Front-end developer', secondLabel: 'Crafting perfection'},
        {firstLabel: 'Frameworks', secondLabel: 'React, NextJs'},
        {firstLabel: 'Languages', secondLabel: 'HTML, CSS, JS, TS, LIQUID'},
        {firstLabel: 'Preprocessors', secondLabel: 'Sass, Less'},
        {
            firstLabel: `Proficient in API's (including but not limited)`,
            secondLabel: 'Rest API, Fetch API, GraphQL, Shopify, Firebase, WebSockets, Google maps'
        },
        {firstLabel: 'State managers', secondLabel: 'Redux (vanilla, toolkit), Mobx, Context api'},
        {firstLabel: 'Ui/Css frameworks', secondLabel: 'Bootstrap, Materials Ui, Ant-design, Tailwind-css'},
    ]
    return (
        <ul>
            {skillsData.map((skill, index) => <li key={index} className='about__skills-item description'>
                <p className='about__skills-title'>{skill.firstLabel}</p>
                <p>{skill.secondLabel}</p>
            </li>)}
        </ul>
    );
};

export default SkillsModule;