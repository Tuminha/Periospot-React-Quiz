// Define your questions and options here
const questionsData = [
    {
    type: 'checkbox',
    questionText: '3. What\'s your area of interest, {userName}?',
    options: [
        { id: 'periodontics', label: 'Periodontics', value: 'Periodontics' },
        { id: 'implantDentistry', label: 'Implant Dentistry', value: 'Implant Dentistry' },
        { id: 'guidedBoneRegeneration', label: 'Guided Bone Regeneration', value: 'Guided Bone Regeneration' },
        { id: 'socialMediaMarketing', label: 'Social Media & Online Marketing in Dentistry', value: 'Social Media & Online Marketing in Dentistry' },
        { id: 'digitalDentistry', label: 'Digital Dentistry', value: 'Digital Dentistry' },
        { id: 'aestheticDentistry', label: 'Aesthetic Dentistry', value: 'Aesthetic Dentistry' },
        { id: 'other', label: 'Other', value: 'Other' }
    ]
    },
    {
    type: 'radio',
    questionText: "4. Who discovered the Osseointegration?",
    correctAnswer: "Branemark",
    options: [
        { id: 'Branemark', label: 'Branemark', value: 'Branemark' },
        { id: 'Misch', label: 'Misch', value: 'Misch' },
        { id: 'Nevins', label: 'Nevins', value: 'Nevins' },
        { id: 'Hilt', label: 'Hilt', value: 'Hilt' },
        { id: 'other', label: 'Other', value: 'Other' }
    ]
    },
    {
        type: 'radio',
    questionText: '5. Immediate implants...',
    correctAnswer: "D) None of the above",
    options: [
        { id: 'dangerous', label: 'A) Are dangerous', value: 'Are dangerous' },
        { id: 'aestheticResult', label: 'B) Never achieve an optimal aesthetic result', value: 'Never achieve an optimal aesthetic result' },
        { id: 'bloodSupply', label: 'C) Provide a new blood supply to the surrounding bone', value: 'Provide a new blood supply to the surrounding bone' },
        { id: 'none', label: 'D) None of the above', value: 'None of the above' },
        { id: 'all', label: 'E) All of the above', value: 'All of the above' }
    ]
    },
    
    {
    type: 'radio',
    questionText: '6. Regarding marginal bone loss, one of the below statements is true:',
    correctAnswer: "B and C are correct",
    options: [
        { id: 'notImportant', label: 'A) Is not important from a biological and clinical point of view', value: 'Is not important from a biological and clinical point of view' },
        { id: 'platformSwitching', label: 'B) Platform switching can be an option to reduce MBL', value: 'Platform switching can be an option to reduce MBL' },
        { id: 'onePieceImplants', label: 'C) One-piece implants usually have better biological behavior than bone level implants', value: 'One-piece implants usually have better biological behavior than bone level implants' },
        { id: 'micromotion', label: 'D) Micromotion between the implant and the abutment does not affect the MBL', value: 'Micromotion between the implant and the abutment does not affect the MBL' },
        { id: 'BCorrect', label: 'E) B and C are correct', value: 'B and C are correct' }
    ]
    },
    {
    type: 'image',
    questionText: '7. So far so good {userName}, but let’s go with an easy one: What is the recommended distance between two implants?',
    correctAnswer: "B) 3 mm",
    options: [
        { id: '1mm', label: 'A) 1 mm', value: 'A) 1 mm', image: 'images/1mm.png' },
        { id: '3mm', label: 'B) 3 mm', value: 'B) 3 mm', image: 'images/3mm.png' },
        { id: '6mm', label: 'C) 6 mm', value: 'C) 6 mm', image: 'images/6mm.png' },
        { id: 'toothBorneBridge', label: 'D) We should avoid implants and always perform a tooth-borne bridge', value: 'D) We should avoid implants and always perform a tooth-borne bridge', image: 'images/bridge.png' }
    ]
    },
    {
    type: 'radio',
    questionText: '8. In which cases would you place an implant in a subcrestally position?',
    correctAnswer: "C) Depends on the implant prosthetic connection",
    options: [
        { id: 'always', label: 'A) Always', value: 'Always' },
        { id: 'never', label: 'B) Never', value: 'Never' },
        { id: 'dependsConnection', label: 'C) Depends on the implant prosthetic connection', value: 'Depends on the implant prosthetic connection' },
        { id: 'dependsSurface', label: 'D) It depends on the implant surface', value: 'It depends on the implant surface' }
    ]
    },
    {
    type: 'image',
    questionText: '9. What is the ideal thickness of the buccal bone wall after placing an implant, {userName}?',
    correctAnswer: "B) 2 mm",
    options: [
        { id: '1mm', label: 'A) 1 mm', value: 'A) 1 mm', image: 'images/buccal1mm.png' },
        { id: '2mm', label: 'B) 2 mm', value: 'B) 2 mm', image: 'images/buccal2mm.png' },
        { id: 'noBoneNeeded', label: 'C) No bone needed. Soft tissue is ok.', value: 'C) No bone needed. Soft tissue is ok.', image: 'images/softtissue.png' },
        { id: '0.5mm', label: 'D) 0.5 mm', value: 'D) 0.5 mm', image: 'images/bucall05mm.png' }
    ]
    },
];


export default questionsData;
