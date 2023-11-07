import React from 'react';

const Skills = () => {
    const skills = [
        {firstLabel: 'User experience design - Ux/Ux', secondLabel: 'Delight the user and make it work'},
        {firstLabel: 'Web and user interface design - Development', secondLabel: 'Websites, web experiences'},
        {firstLabel: 'Front-end developer', secondLabel: 'Crafting perfection'},
        {firstLabel: 'Frameworks', secondLabel: 'React, NextJs'},
        {firstLabel: 'Languages', secondLabel: 'HTML, CSS, JS, TS'},
        {firstLabel: 'Preprocessors', secondLabel: 'Sass, Less'},
        {firstLabel: 'State managers', secondLabel: 'Redux (Vanilla, Toolkit), Mobx, Context api'},
        {firstLabel: 'Ui/Css frameworks', secondLabel: 'Bootstrap, Materials Ui, Ant-design, tailwind-css'},
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