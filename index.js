"use strict";
const wishlist = [
    {
        seasons: ['Fall'],
        courses: [
            { code: ['INFO', 2450], name: 'Communication & Technology', credits: 3, type: ['liberal', 'minor'] },
            { code: ['INFO', 3450], name: 'Human-Computer Interaction Design', credits: 3, type: ['liberal', 'minor'] },
        ]
    },
    {
        seasons: ['Spring'],
        courses: [
            { code: ['INFO', 4130], name: 'Health and Computation', credits: 3, type: ['stem', 'minor'] },
            { code: ['INFO', 4940], name: 'Intelligent User Interfaces', credits: 3, type: ['stem', 'minor'] },
            { code: ['CS', 5150], name: 'Human-Computer Interaction Design', credits: 4, type: ['stem', 'major', 'minor'] },
        ]
    }
];
const plan = [
    {
        year: 2019,
        name: 'Freshman',
        semesters: [
            {
                year: 2019,
                name: 'Fall',
                courses: [
                    { code: ['AEP', 1100, 'ENGRI', 1100], name: 'Lasers & Photonics', credits: 3, type: ['stem', 'distribution'] },
                    { code: ['MATH', 1920], name: 'Multivariable Calculus', credits: 4, type: ['stem', 'core'] },
                    { code: ['SPAN', 2090], name: 'Intermediate Composition & Conversation', credits: 4, type: ['liberal', 'language'] },
                    { code: ['ENGL', 1134], name: 'True Stories', credits: 3, type: ['liberal', 'fws'] },
                    { code: ['ENGRG', 1401], name: 'CUAir', credits: 1, type: ['stem', 'other'] },
                    { code: ['ENGRG', 1050], name: 'Engineering Advising', credits: 1, type: ['other'] },
                    { code: ['PE', 1100], name: 'Beginning Swimming', credits: 1, type: ['pe'] }
                ]
            },
            {
                year: 2020,
                name: 'Spring',
                courses: [
                    { code: ['CS', 2110], name: 'Object Oriented Programming & Data Structures', credits: 3, type: ['stem', 'distribution', 'major'] },
                    { code: ['ECE', 2300], name: 'Digital Logic & Computer Organization', credits: 4, type: ['stem', 'distribution', 'major'] },
                    { code: ['MATH', 2930], name: 'Differential Equations', credits: 4, type: ['stem', 'major', 'elective'] },
                    { code: ['ANTHR', 1101], name: 'Culture, Society, & Power', credits: 3, type: ['liberal', 'fws'] },
                    { code: ['CS', 4998], name: 'CUAir', credits: 3, type: ['stem', 'major', 'elective'] },
                    { code: ['PE', 1366], name: 'Karate', credits: 1, type: ['pe'] },
                    { code: ['PE', 1440], name: 'Badminton', credits: 1, type: ['pe'] }
                ]
            }
        ]
    },
    {
        year: 2020,
        name: 'Sophomore',
        semesters: [
            {
                year: 2020,
                name: 'Fall',
                courses: [
                    { code: ['PHYS', 2213], name: 'Physics II: Electromagnetism', credits: 4, type: ['stem', 'core'] },
                    { code: ['CS', 2800], name: 'Discrete Structures', credits: 3, type: ['stem', 'major'] },
                    { code: ['CS', 3110], name: 'Data Structures & Functional Programming', credits: 3, type: ['stem', 'major'] },
                    { code: ['CS', 4620], name: 'Computer Graphics I', credits: 3, type: ['stem', 'major', 'elective'] },
                    { code: ['CS', 4621], name: 'Computer Graphics Practicum', credits: 2, type: ['stem', 'major', 'elective'] },
                    { code: ['CS', 4998], name: 'CUAir', credits: 1, type: ['stem', 'major', 'elective'] },
                    { code: ['PE', 1366], name: 'Karate', credits: 1, type: ['pe'] }
                ]
            },
            {
                year: 2021,
                name: 'Spring',
                courses: [
                    { code: ['CS', 3420, 'ECE', 3410], name: 'Embedded Systems', credits: 4, type: ['stem', 'major'] },
                    { code: ['CS', 4820], name: 'Intro Analysis of Algorithms', credits: 4, type: ['stem', 'major'] },
                    { code: ['INFO', 1200], name: 'Info Ethics, Law, & Policy', credits: 3, type: ['liberal'] },
                    { code: ['PMA', 2800], name: 'Intro to Acting', credits: 3, type: ['liberal'] },
                    { code: ['CS', 4998], name: 'CUAir', credits: 1, type: ['stem', 'major', 'elective'] },
                    { code: ['PE', 1366], name: 'Karate', credits: 1, type: ['pe'] }
                ]
            }
        ]
    },
    {
        year: 2021,
        name: 'Junior',
        semesters: [
            {
                year: 2021,
                name: 'Fall',
                courses: [
                    { code: ['MATH', 2940], name: 'Linear Algebra', credits: 4, type: ['stem', 'core'] },
                    { code: ['ECE', 2100], name: 'Intro to Circuits', credits: 3, type: ['stem', 'major'] },
                    { code: ['ECE', 2200], name: 'Signals and Information', credits: 3, type: ['stem', 'major'] },
                    { code: ['CS', 4410], name: 'Operating Systems', credits: 3, type: ['stem', 'major'] },
                    { code: ['CS', 4998], name: 'CUAir', credits: 1, type: ['stem', 'major', 'elective'] },
                    { code: ['PE', 1366], name: 'Karate', credits: 1, type: ['pe'] }
                ]
            },
            {
                year: 2022,
                name: 'Spring',
                courses: []
            }
        ]
    },
    {
        year: 2022,
        name: 'Senior',
        semesters: [
            {
                year: 2022,
                name: 'Fall',
                courses: []
            },
            {
                year: 2023,
                name: 'Spring',
                courses: []
            }
        ]
    }
];
function make(type, classes, ...content) {
    const el = document.createElement(type);
    if (classes)
        el.classList.add(...classes);
    if (content)
        content.forEach(v => el.append(v));
    return el;
}
const { body } = document;
for (const year of plan) {
    body.append(make('section', ['year'], make('h2', [], year.name), make('div', ['semesters'], ...year.semesters.map(semester => make('section', ['semester'], make('h3', [], semester.name), make('ul', ['courses'], ...(semester.courses.length > 0 ? [
        ...semester.courses.map(course => make('li', ['course', ...course.type], make('span', ['code'], course.code.length === 4 ?
            `${course.code[0]} ${course.code[1]}/${course.code[2]} ${course.code[3]}` :
            `${course.code[0]} ${course.code[1]}`), make('span', ['name'], course.name), make('span', ['credits'], course.credits.toString(10)))),
        make('li', ['total'], semester.courses.reduce((p, c) => p + c.credits, 0).toString())
    ] : [
        make('li', ['empty'], 'Nothing planned here yet.')
    ])))))));
}
