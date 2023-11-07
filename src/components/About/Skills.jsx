import React from 'react';

const Skills = () => {
    const skills = [
        {firstLabel: 'User experience design - Ui/Ux', secondLabel: 'Delight the user and make it work'},
        {firstLabel: 'Web and user interface design - development', secondLabel: 'Websites, web experiences'},
        {firstLabel: 'Front-end developer', secondLabel: 'Crafting perfection'},
        {firstLabel: 'Frameworks', secondLabel: 'React, NextJs'},
        {firstLabel: 'Languages', secondLabel: 'HTML, CSS, JS, TS'},
        {firstLabel: 'Preprocessors', secondLabel: 'Sass, Less'},
        {firstLabel: 'State managers', secondLabel: 'Redux (vanilla, toolkit), Mobx, Context api'},
        {firstLabel: 'Ui/Css frameworks', secondLabel: 'Bootstrap, Materials Ui, Ant-design, Tailwind-css'},
    ]
    return (
        <ul>
            {skills.map((skill, index) => <li className='about__skills description'>
                <p className='about__skills-title'>{skill.firstLabel}</p>
                <p>{skill.secondLabel}</p>
            </li>)}
        </ul>
    );
};

export default Skills;