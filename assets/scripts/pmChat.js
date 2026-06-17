// ══════════════════════════════════════════════════════════════
//  PM CHAT SIMULATOR — choose a topic, then practice real PM chats
//  Topics: Modal Verbs / Passive Voice
//  Each topic has a pool of scenarios with mixed difficulty.
//  Every playthrough draws a random subset + shuffles order/options,
//  so the conversation is different every time.
// ══════════════════════════════════════════════════════════════

const pmChatTopics = {

  // ════════════════════════ MODAL VERBS ════════════════════════
  modal: {
    key: "modal",
    label: "Modal Verbs",
    icon: "🗣️",
    accent: "#7c6ffd",
    description: "Respond to your PM using can, could, should, must and more.",
    tagList: ["can", "could", "should", "must", "cannot", "have to", "should have", "could have"],
    drawCounts: { easy: 2, medium: 3, hard: 1 },
    scenarios: [
      {
        id: "m1",
        difficulty: "easy",
        phase: "Sprint Planning",
        pmName: "Sarah Chen",
        pmAvatar: "SC",
        pmColor: "#7c6ffd",
        intro: "Hey! We're kicking off the sprint today. Got a few things to discuss...",
        messages: [
          { from: "pm", text: "The client wants the login feature ready by Friday. Is that possible for your team?", delay: 0 },
          { from: "pm", text: "Also, the design files aren't ready yet. What do you think we should do?", delay: 1200 }
        ],
        question: "How do you respond about the Friday deadline and the missing design files?",
        hint: "Use: can / could / should / must",
        options: [
          { text: "We can finish the login by Friday if the designs arrive today. We should start the backend now.", correct: true, tags: ["can", "should"], feedback: "Perfect! 'Can' expresses possibility and 'should' gives a clear recommendation. Professional and direct!" },
          { text: "We will finishing the login Friday. The designs must arriving today.", correct: false, tags: [], feedback: "Incorrect grammar. 'Will finishing' and 'must arriving' are wrong — modals always use the base form of the verb." },
          { text: "We could finish by Friday, but we should wait for the designs before starting.", correct: true, tags: ["could", "should"], feedback: "Great! 'Could' shows conditional possibility and 'should' is a solid recommendation. Well done!" },
          { text: "The team is able to finishing it. Designs should arriving soon.", correct: false, tags: [], feedback: "Wrong structure. After modals, always use the BASE form: 'should arrive', not 'should arriving'." }
        ]
      },
      {
        id: "m2",
        difficulty: "medium",
        phase: "Production Crisis",
        pmName: "Marcus Lee",
        pmAvatar: "ML",
        pmColor: "#ff6b35",
        intro: "🚨 We have a critical situation. Stay focused.",
        messages: [
          { from: "pm", text: "The payment system is down. Users cannot complete purchases. This is costing us thousands per minute!", delay: 0 },
          { from: "pm", text: "I need to tell the CEO something in 10 minutes. What can we promise?", delay: 1400 }
        ],
        question: "What do you tell Marcus about the situation and what you can promise?",
        hint: "Use: must / can / could / should / cannot",
        options: [
          { text: "We must fix this immediately. I can give you an update in 20 minutes, but we cannot promise a specific time yet.", correct: true, tags: ["must", "can", "cannot"], feedback: "Excellent! 'Must' shows urgency, 'can' commits to an update, and 'cannot' is honest about uncertainty. Perfect crisis communication!" },
          { text: "We should investigate the issue. It could be a database problem. We must not ignore the logs.", correct: true, tags: ["should", "could", "must not"], feedback: "Very good! Using 'could' for a hypothesis and 'must not' for a prohibition shows strong modal control." },
          { text: "We will to fix it fast. The system must to restart now.", correct: false, tags: [], feedback: "Wrong! Never use 'to' after 'will' or 'must'. Correct: 'We will fix it' and 'The system must restart'." },
          { text: "The developers should to work harder. They can solving this.", correct: false, tags: [], feedback: "Two errors: 'should to work' → 'should work', and 'can solving' → 'can solve'. Modals + base verb, no 'to', no -ing." }
        ]
      },
      {
        id: "m3",
        difficulty: "medium",
        phase: "Feature Request",
        pmName: "Priya Nair",
        pmAvatar: "PN",
        pmColor: "#00d4aa",
        intro: "Hi! The client just sent a new feature request. Let's talk about it.",
        messages: [
          { from: "pm", text: "The client wants to add a real-time chat feature to the app. They want it in 2 weeks.", delay: 0 },
          { from: "pm", text: "I know it's a lot. What are our options?", delay: 1300 }
        ],
        question: "How do you explain the options and risks to Priya?",
        hint: "Use: could / should / cannot / might / must",
        options: [
          { text: "We could build a basic version in 2 weeks, but we should set clear scope limits. A full feature cannot be done in that time.", correct: true, tags: ["could", "should", "cannot"], feedback: "Excellent response! 'Could' proposes an option, 'should' gives advice, and 'cannot' sets a realistic boundary." },
          { text: "We couldn't never do this. The client should not asking for this.", correct: false, tags: [], feedback: "'Couldn't never' is a double negative — wrong. Also 'should not asking' → 'should not ask'. Keep it clean!" },
          { text: "We should discuss scope with the client. We could use an existing library to save time, but we must test it thoroughly.", correct: true, tags: ["should", "could", "must"], feedback: "Well done! Three different modals used correctly — recommendation, possibility, and obligation. Impressive!" },
          { text: "The team must to work overtime. We should to deliver on time.", correct: false, tags: [], feedback: "Remember: no 'to' after modals! 'Must work', 'should deliver' — base verb directly after the modal." }
        ]
      },
      {
        id: "m4",
        difficulty: "medium",
        phase: "Team Conflict",
        pmName: "David Okafor",
        pmAvatar: "DO",
        pmColor: "#ffd166",
        intro: "There's some friction on the team. I need your help handling this professionally.",
        messages: [
          { from: "pm", text: "Two developers disagree on the architecture. Lucas says we should use microservices, Ana says we cannot change the current structure now.", delay: 0 },
          { from: "pm", text: "We have a client demo tomorrow. What do you recommend?", delay: 1500 }
        ],
        question: "How do you recommend handling the conflict for the demo?",
        hint: "Use: should / must / could / cannot",
        options: [
          { text: "We should keep the current structure for the demo. We can discuss the architecture change after the client meeting.", correct: true, tags: ["should", "can"], feedback: "Smart and pragmatic! 'Should' for recommendation and 'can' for future possibility. Great PM thinking!" },
          { text: "Lucas must to listen to Ana. She should be right about this.", correct: false, tags: [], feedback: "'Must to listen' is wrong → 'must listen'. Also 'should be right' implies doubt, which isn't ideal. Try again!" },
          { text: "Both developers could present their case in 10 minutes each. Then we must make a decision together before the demo.", correct: true, tags: ["could", "must"], feedback: "Excellent! Giving both sides a voice with 'could' and setting a firm deadline with 'must'. Perfect leadership response!" },
          { text: "They shouldn't to disagree. The team must working as one.", correct: false, tags: [], feedback: "'Shouldn't to disagree' → 'shouldn't disagree'. 'Must working' → 'must work'. Base verb, always!" }
        ]
      },
      {
        id: "m5",
        difficulty: "hard",
        phase: "Client Presentation",
        pmName: "Sarah Chen",
        pmAvatar: "SC",
        pmColor: "#7c6ffd",
        intro: "The big moment is here. We're presenting to the client in 30 minutes!",
        messages: [
          { from: "pm", text: "The client will ask about the security of the system. They're very concerned about data protection.", delay: 0 },
          { from: "pm", text: "How should we explain our security approach to them?", delay: 1200 }
        ],
        question: "How do you explain your team's security approach to the client?",
        hint: "Use: must / cannot / should / can",
        options: [
          { text: "Our system must comply with GDPR. Users cannot access data without authentication, and all data should be encrypted.", correct: true, tags: ["must", "cannot", "should"], feedback: "Perfect! 'Must comply' for legal obligation, 'cannot access' for prohibition, 'should be encrypted' for best practice. Textbook response!" },
          { text: "We can guarantee complete security. The system will to protect everything automatically.", correct: false, tags: [], feedback: "Two issues: never guarantee 'complete security' (it's unrealistic), and 'will to protect' → 'will protect'. No 'to' after will!" },
          { text: "We should never promise 100% security, but we can demonstrate our encryption layer and our access control system.", correct: true, tags: ["should", "can"], feedback: "Excellent and honest! 'Should never promise' sets realistic expectations, 'can demonstrate' shows confidence. Great!" },
          { text: "The data must to be safe. We should to show them the firewall.", correct: false, tags: [], feedback: "'Must to be' → 'must be'. 'Should to show' → 'should show'. Getting rid of that extra 'to' is essential!" }
        ]
      },
      {
        id: "m6",
        difficulty: "hard",
        phase: "Sprint Retrospective",
        pmName: "Marcus Lee",
        pmAvatar: "ML",
        pmColor: "#ff6b35",
        intro: "Sprint's over. Time to reflect and improve. Let's be honest.",
        messages: [
          { from: "pm", text: "The sprint had some issues. We missed 3 story points and had 2 bugs in production. What went wrong?", delay: 0 },
          { from: "pm", text: "More importantly — what should we do differently next sprint?", delay: 1400 }
        ],
        question: "How do you lead the retrospective discussion?",
        hint: "Use: should have / could have / must / should",
        options: [
          { text: "We should have estimated better. The team could have caught those bugs in code review. Next sprint, we must add more testing time.", correct: true, tags: ["should have", "could have", "must"], feedback: "Outstanding! Past modals 'should have' and 'could have' for reflection, and 'must' for a firm commitment. This is advanced modal use!" },
          { text: "We should have catch the bugs earlier. Testing could to be better.", correct: false, tags: [], feedback: "'Should have catch' → 'should have caught' (past participle!). 'Could to be' → 'could be'. Almost there!" },
          { text: "The developers should have communicated more. We could have avoided these problems with better planning. We must improve our process.", correct: true, tags: ["should have", "could have", "must"], feedback: "Excellent retrospective language! Past regret with 'should/could have' + future commitment with 'must'. Impressive!" },
          { text: "Everybody should to work harder. We could have been more better.", correct: false, tags: [], feedback: "'Should to work' → 'should work'. 'More better' is a double comparative — just say 'better'. Two errors to fix!" }
        ]
      },
      {
        id: "m7",
        difficulty: "easy",
        phase: "Remote Work Policy",
        pmName: "Priya Nair",
        pmAvatar: "PN",
        pmColor: "#00d4aa",
        intro: "Quick one before the weekend — HR asked us about remote work rules.",
        messages: [
          { from: "pm", text: "Some developers want to work from home every day. What should our policy be?", delay: 0 },
          { from: "pm", text: "Also, can new hires work remotely during their first month?", delay: 1200 }
        ],
        question: "How do you respond about the remote work policy?",
        hint: "Use: can / could / should / must",
        options: [
          { text: "Experienced developers can work remotely most days, but new hires should come to the office during onboarding.", correct: true, tags: ["can", "should"], feedback: "Great! 'Can' grants permission and 'should' gives a sensible recommendation for new hires." },
          { text: "Developers can to work from home anytime. New hires must to come on Mondays.", correct: false, tags: [], feedback: "Two errors: 'can to work' → 'can work', 'must to come' → 'must come'. No 'to' after modals!" },
          { text: "We could allow full remote work for senior staff, but new hires must attend onboarding in person.", correct: true, tags: ["could", "must"], feedback: "Solid! 'Could' suggests an option and 'must' sets a firm requirement for onboarding." },
          { text: "Everyone should working from home. New hires shouldn't to skip onboarding.", correct: false, tags: [], feedback: "'Should working' → 'should work'. 'Shouldn't to skip' → 'shouldn't skip'. Base verb after modals always!" }
        ]
      },
      {
        id: "m8",
        difficulty: "easy",
        phase: "Onboarding a New Developer",
        pmName: "David Okafor",
        pmAvatar: "DO",
        pmColor: "#ffd166",
        intro: "We have a new developer starting Monday. Let's plan the onboarding.",
        messages: [
          { from: "pm", text: "She has experience with React but not with our backend stack. What do you suggest?", delay: 0 },
          { from: "pm", text: "Should we assign her a mentor?", delay: 1200 }
        ],
        question: "How do you suggest planning her onboarding?",
        hint: "Use: should / could / must / can",
        options: [
          { text: "She should shadow a senior developer for the first week. We could also give her small backend tasks to learn gradually.", correct: true, tags: ["should", "could"], feedback: "Great onboarding plan! 'Should' for a clear recommendation and 'could' for a flexible next step." },
          { text: "She must to learn everything in one day. We should to skip the mentor.", correct: false, tags: [], feedback: "'Must to learn' → 'must learn'. 'Should to skip' → 'should skip'. Also, skipping the mentor isn't great onboarding advice!" },
          { text: "We must assign her a mentor — it's our standard process. She can ask questions anytime during the first month.", correct: true, tags: ["must", "can"], feedback: "Excellent! 'Must' for a firm company policy and 'can' for an open, supportive offer." },
          { text: "She should working alone. Mentors can helping only sometimes.", correct: false, tags: [], feedback: "'Should working' → 'should work'. 'Can helping' → 'can help'. Base verb after every modal!" }
        ]
      },
      {
        id: "m9",
        difficulty: "medium",
        phase: "Tech Debt Discussion",
        pmName: "Elena Rodrigues",
        pmAvatar: "ER",
        pmColor: "#5fb8ff",
        intro: "The codebase has a lot of tech debt. We need a plan before it gets worse.",
        messages: [
          { from: "pm", text: "We could spend a whole sprint just refactoring. But the client wants new features too. What's realistic?", delay: 0 },
          { from: "pm", text: "What should be our priority?", delay: 1300 }
        ],
        question: "How do you propose handling tech debt vs new features?",
        hint: "Use: should / could / must / cannot",
        options: [
          { text: "We should dedicate 20% of each sprint to tech debt. We cannot ignore it forever, but we don't have to stop new features completely.", correct: true, tags: ["should", "cannot"], feedback: "Balanced and realistic! 'Should' proposes a concrete plan and 'cannot' acknowledges the real risk of ignoring debt." },
          { text: "We must to fix everything now. New features should to wait.", correct: false, tags: [], feedback: "'Must to fix' → 'must fix'. 'Should to wait' → 'should wait'. Also, fixing 'everything now' isn't realistic — be specific!" },
          { text: "We could tackle the worst parts first. The team must agree on a clear priority list before the next sprint.", correct: true, tags: ["could", "must"], feedback: "Smart! 'Could' suggests a practical approach and 'must' sets a firm process requirement." },
          { text: "Tech debt shouldn't matter much. We can to ignore it for now.", correct: false, tags: [], feedback: "'Can to ignore' → 'can ignore'. Also, this advice is risky — ignoring tech debt usually backfires!" }
        ]
      }
    ]
  },

  // ════════════════════════ PASSIVE VOICE ════════════════════════
  passive: {
    key: "passive",
    label: "Passive Voice",
    icon: "🛠️",
    accent: "#00d4aa",
    description: "Report bugs, releases and incidents the way real tech teams do — using passive voice.",
    tagList: ["was/were + V3", "is/are + V3", "has/have been + V3", "will be + V3", "is/are being + V3"],
    drawCounts: { easy: 3, medium: 2, hard: 1 },
    scenarios: [
      {
        id: "p1",
        difficulty: "easy",
        phase: "Bug Report Update",
        pmName: "Sarah Chen",
        pmAvatar: "SC",
        pmColor: "#7c6ffd",
        intro: "The QA team found something in last night's build.",
        messages: [
          { from: "pm", text: "Did you fix the checkout bug yet?", delay: 0 },
          { from: "pm", text: "What's the status?", delay: 1100 }
        ],
        question: "How do you update Sarah on the checkout bug, using passive voice?",
        hint: "Use: was/were + participle, is/are + participle, has been + participle",
        options: [
          { text: "The checkout bug was found this morning and it has already been fixed. A new build will be deployed tonight.", correct: true, tags: ["was found", "has been fixed", "will be deployed"], feedback: "Great use of passive voice across three tenses — past, present perfect, and future passive!" },
          { text: "I fixed the bug. We deploy a new build tonight.", correct: false, tags: [], feedback: "This is grammatically fine, but it's all active voice. Try focusing on the bug itself: 'The bug was fixed...' instead of 'I fixed...'." },
          { text: "The bug has been identified and a fix was applied an hour ago. Testing is being done right now.", correct: true, tags: ["has been identified", "was applied", "is being done"], feedback: "Excellent! Present perfect, simple past, and present continuous passive — all used correctly." },
          { text: "The bug was fix yesterday. A new build will deploy soon.", correct: false, tags: [], feedback: "'Was fix' → 'was fixed' (you need the participle). 'Will deploy' → 'will be deployed' — passive needs 'be' + participle." }
        ]
      },
      {
        id: "p2",
        difficulty: "easy",
        phase: "Release Announcement",
        pmName: "Marcus Lee",
        pmAvatar: "ML",
        pmColor: "#ff6b35",
        intro: "We're announcing the new release to the whole company today.",
        messages: [
          { from: "pm", text: "Can you write the announcement message? What changed in this version?", delay: 0 },
          { from: "pm", text: "Keep it professional, like a real changelog.", delay: 1100 }
        ],
        question: "Write a short release announcement using passive voice.",
        hint: "Use: was/were + participle, is/are + participle",
        options: [
          { text: "Three major bugs were fixed in this release. The dashboard was redesigned, and a new dark mode was added.", correct: true, tags: ["were fixed", "was redesigned", "was added"], feedback: "Perfect changelog tone! This is exactly how real release notes are written." },
          { text: "We fixed three bugs. We redesigned the dashboard. We added dark mode.", correct: false, tags: [], feedback: "Correct grammar, but all active voice. Real changelogs usually focus on what changed, not who changed it: 'X was fixed', not 'we fixed X'." },
          { text: "Performance was improved by 30%, and the login system was completely rebuilt for better security.", correct: true, tags: ["was improved", "was rebuilt"], feedback: "Great! Clean, professional passive voice — exactly the changelog style clients expect." },
          { text: "Performance improve by 30%. Login system rebuild for security.", correct: false, tags: [], feedback: "'Improve' → 'was improved', 'rebuild' → 'was rebuilt'. Passive voice always needs a form of 'be' + participle." }
        ]
      },
      {
        id: "p3",
        difficulty: "medium",
        phase: "Security Incident Report",
        pmName: "Priya Nair",
        pmAvatar: "PN",
        pmColor: "#00d4aa",
        intro: "We need to report a security incident to the client. This has to be precise.",
        messages: [
          { from: "pm", text: "What happened and what are we doing about it?", delay: 0 }
        ],
        question: "Write the incident summary using passive voice.",
        hint: "Use: was/were + participle, has been + participle, will be + participle",
        options: [
          { text: "A vulnerability was discovered yesterday. It has already been patched, and all affected accounts will be notified by email.", correct: true, tags: ["was discovered", "has been patched", "will be notified"], feedback: "Excellent! This is exactly how a calm, professional incident report should sound." },
          { text: "We discovered a vulnerability. We patched it. We will notify accounts.", correct: false, tags: [], feedback: "All active voice. For a formal incident report, the passive voice keeps the focus on the facts, not on who did what." },
          { text: "Suspicious activity was detected in the logs. The affected server has been isolated, and a full audit is being conducted.", correct: true, tags: ["was detected", "has been isolated", "is being conducted"], feedback: "Very strong! Mixing past, present perfect, and present continuous passive shows real fluency." },
          { text: "The vulnerability discover yesterday. It patch already.", correct: false, tags: [], feedback: "'Discover' → 'was discovered'. 'Patch' → 'has been patched'. Don't forget the auxiliary 'be/has been' before the participle." }
        ]
      },
      {
        id: "p4",
        difficulty: "medium",
        phase: "Code Review Feedback",
        pmName: "David Okafor",
        pmAvatar: "DO",
        pmColor: "#ffd166",
        intro: "I need you to give feedback on a teammate's pull request — keep it professional.",
        messages: [
          { from: "pm", text: "The code works, but it's messy. What do you tell them?", delay: 0 }
        ],
        question: "Write professional code review feedback using passive voice.",
        hint: "Use: should be + participle, must be + participle, can be + participle",
        options: [
          { text: "This function should be renamed for clarity. The duplicated code must be removed before merging.", correct: true, tags: ["should be renamed", "must be removed"], feedback: "Great diplomatic tone! Passive voice keeps the feedback focused on the code, not the person." },
          { text: "You should rename this function. You must remove the duplicated code.", correct: false, tags: [], feedback: "Grammatically fine, but addressing the person directly ('you should...') can feel confrontational in a review. Passive voice softens the tone." },
          { text: "A few variable names could be improved, and tests should be added before this is merged.", correct: true, tags: ["could be improved", "should be added"], feedback: "Well balanced — constructive, specific, and professionally worded." },
          { text: "Variable names could improved. Tests should add before merge.", correct: false, tags: [], feedback: "'Could improved' → 'could be improved'. 'Should add' → 'should be added'. Passive always needs 'be' before the participle." }
        ]
      },
      {
        id: "p5",
        difficulty: "medium",
        phase: "Server Outage Update",
        pmName: "Elena Rodrigues",
        pmAvatar: "ER",
        pmColor: "#5fb8ff",
        intro: "The server just went down. I need an update for the status page.",
        messages: [
          { from: "pm", text: "What do we tell users?", delay: 0 }
        ],
        question: "Write the outage status update using passive voice.",
        hint: "Use: is/are being + participle, was/were + participle, will be + participle",
        options: [
          { text: "The issue is currently being investigated. Service was restored for most users, and a full report will be published once it's resolved.", correct: true, tags: ["is currently being investigated", "was restored", "will be published"], feedback: "Excellent! This sounds exactly like a real status page update." },
          { text: "We are investigating the issue. We restored service for most users.", correct: false, tags: [], feedback: "Active voice — fine grammar, but status pages usually use passive voice to sound neutral and factual." },
          { text: "The outage was caused by a database error. The error has been fixed, and normal service will be resumed shortly.", correct: true, tags: ["was caused", "has been fixed", "will be resumed"], feedback: "Great structure — clear cause, current status, and a reassuring next step, all in passive voice." },
          { text: "Database error cause the outage. It fix now.", correct: false, tags: [], feedback: "'Cause' → 'caused' (and needs 'was'). 'Fix' → 'has been fixed'. Don't drop the auxiliary verb!" }
        ]
      },
      {
        id: "p6",
        difficulty: "easy",
        phase: "Performance Review Summary",
        pmName: "Sarah Chen",
        pmAvatar: "SC",
        pmColor: "#7c6ffd",
        intro: "I need to summarize a developer's quarterly performance for HR.",
        messages: [
          { from: "pm", text: "Keep it factual and objective.", delay: 0 }
        ],
        question: "Summarize the developer's performance using passive voice.",
        hint: "Use: was/were + participle, has been + participle",
        options: [
          { text: "Three major features were delivered on time this quarter. Code quality has been consistently praised by the team.", correct: true, tags: ["were delivered", "has been praised"], feedback: "Perfect tone for an HR summary — objective and professional." },
          { text: "He delivered three features. The team praised his code.", correct: false, tags: [], feedback: "Active voice — correct grammar, but HR summaries usually read more neutrally in passive voice." },
          { text: "Several bugs were fixed ahead of schedule, and a mentoring role was taken on voluntarily.", correct: true, tags: ["were fixed", "was taken on"], feedback: "Nice and natural — this reads like a real performance review." },
          { text: "He fix bugs ahead of schedule. He take a mentoring role.", correct: false, tags: [], feedback: "'Fix' → 'were fixed'. 'Take' → 'was taken on'. Remember the auxiliary verb + participle." }
        ]
      },
      {
        id: "p7",
        difficulty: "hard",
        phase: "Client Escalation",
        pmName: "Marcus Lee",
        pmAvatar: "ML",
        pmColor: "#ff6b35",
        intro: "An angry client just emailed about a delay. We need a calm, professional reply.",
        messages: [
          { from: "pm", text: "What do we say about the delay?", delay: 0 }
        ],
        question: "Write a calm response about the delay using passive voice.",
        hint: "Use: was/were + participle, has been + participle, will be + participle",
        options: [
          { text: "The delay was caused by an unexpected technical issue. It has been resolved, and your project will be delivered by Friday.", correct: true, tags: ["was caused", "has been resolved", "will be delivered"], feedback: "Calm, clear, and professional — exactly the tone you want with an upset client." },
          { text: "We caused the delay because of a technical issue. We will deliver your project Friday.", correct: false, tags: [], feedback: "Active voice puts the blame directly on 'we', which can sound defensive. Passive voice keeps the focus on the facts." },
          { text: "We understand your frustration. The root cause has been identified and a new timeline will be shared today.", correct: true, tags: ["has been identified", "will be shared"], feedback: "Excellent! Empathy first, then clear passive-voice facts. Great client communication." },
          { text: "The root cause identify already. New timeline share today.", correct: false, tags: [], feedback: "'Identify' → 'has been identified'. 'Share' → 'will be shared'. Don't forget the auxiliary verbs!" }
        ]
      },
      {
        id: "p8",
        difficulty: "hard",
        phase: "Postmortem Report",
        pmName: "David Okafor",
        pmAvatar: "DO",
        pmColor: "#ffd166",
        intro: "Let's write the postmortem for last week's outage.",
        messages: [
          { from: "pm", text: "What should the report include?", delay: 0 }
        ],
        question: "Draft the key points of the postmortem using passive voice.",
        hint: "Use: was/were + participle, has been + participle, should be + participle",
        options: [
          { text: "The root cause was identified within two hours. A permanent fix has been implemented, and monitoring alerts should be improved.", correct: true, tags: ["was identified", "has been implemented", "should be improved"], feedback: "Outstanding! Past, present perfect, and a forward-looking recommendation — all in passive voice." },
          { text: "We identified the cause in two hours. We implemented a fix.", correct: false, tags: [], feedback: "Active voice — correct, but postmortems are usually written in passive voice to stay focused on the system, not the people." },
          { text: "The incident was caused by a misconfigured server. Steps have been taken to prevent it from happening again.", correct: true, tags: ["was caused", "have been taken"], feedback: "Great! Clear cause and clear next steps, both in natural passive voice." },
          { text: "Server misconfigure cause incident. Steps take to prevent again.", correct: false, tags: [], feedback: "'Misconfigure cause' → 'was caused by a misconfigured server'. 'Steps take' → 'steps have been taken'. Review the structure: be + participle." }
        ]
      },
      {
        id: "p9",
        difficulty: "easy",
        phase: "New Hire Announcement",
        pmName: "Priya Nair",
        pmAvatar: "PN",
        pmColor: "#00d4aa",
        intro: "We're announcing a new team member company-wide.",
        messages: [
          { from: "pm", text: "Can you write a short, professional announcement?", delay: 0 }
        ],
        question: "Write the announcement using passive voice where appropriate.",
        hint: "Use: was/were + participle, has been + participle",
        options: [
          { text: "A new backend developer has been hired and will be introduced at Monday's stand-up.", correct: true, tags: ["has been hired", "will be introduced"], feedback: "Clean and professional — perfect for a company-wide announcement." },
          { text: "We hired a new backend developer. We will introduce her Monday.", correct: false, tags: [], feedback: "Active voice — fine, but a bit informal for a company announcement. Passive voice reads more polished here." },
          { text: "Our team was recently expanded with a new hire. She has already been added to the project Slack channel.", correct: true, tags: ["was expanded", "has been added"], feedback: "Nice and natural — this is exactly how a real announcement would sound." },
          { text: "Team recently expand with new hire. She already add to Slack.", correct: false, tags: [], feedback: "'Expand' → 'was expanded'. 'Add' → 'has been added'. Don't drop the auxiliary verbs in passive voice." }
        ]
      }
    ]
  }
};

// ─── STATE ──────────────────────────────────────────────────
let pmState = {
  topic: null,
  scenarios: [],
  phase: 0,
  msgIndex: 0,
  answered: false,
  score: 0,
  xpEarned: 0,
  selectedOption: null
};

// ─── HELPERS ──────────────────────────────────────────────────
function pmShuffle(arr) {
  const a = arr.slice();
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [a[k], a[j]] = [a[j], a[k]];
  }
  return a;
}

function drawPMScenarios(topicKey) {
  const topic = pmChatTopics[topicKey];
  const counts = topic.drawCounts;
  const buckets = { easy: [], medium: [], hard: [] };
  topic.scenarios.forEach(s => buckets[s.difficulty].push(s));
  let result = [];
  Object.keys(counts).forEach(diff => {
    result = result.concat(pmShuffle(buckets[diff]).slice(0, counts[diff]));
  });
  result = pmShuffle(result);
  // shuffle option order within each scenario (deep-ish clone so we don't mutate the master pool)
  return result.map(s => ({ ...s, options: pmShuffle(s.options) }));
}

// ─── INIT ────────────────────────────────────────────────────
function loadPMChat() {
  renderPMTopicSelect();
}

// ─── TOPIC SELECT SCREEN ─────────────────────────────────────
function renderPMTopicSelect() {
  const page = document.getElementById('page-pmchat');
  if (!page) return;

  const topics = Object.values(pmChatTopics);

  page.innerHTML = `
    <div class="section-title">💬 PM Chat Simulator</div>
    <div class="pm-topic-select">
      <p class="pm-topic-intro">Choose a grammar topic. Your PM will message you about real dev situations — you reply using the right structures. Each topic has several possible conversations, so every playthrough is different.</p>
      <div class="pm-topic-grid">
        ${topics.map(t => `
          <div class="pm-topic-card" style="--topic-accent:${t.accent}" onclick="selectPMTopic('${t.key}')">
            <div class="pm-topic-icon">${t.icon}</div>
            <div class="pm-topic-title">${t.label}</div>
            <div class="pm-topic-desc">${t.description}</div>
            <div class="pm-topic-meta">${t.scenarios.length} possible scenarios · plays ${Object.values(t.drawCounts).reduce((a,b)=>a+b,0)} per session</div>
            <div class="pm-topic-tags">
              ${t.tagList.slice(0, 5).map(tag => `<span class="pm-modal-pill pm-topic-pill">${tag}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectPMTopic(key) {
  pmState.topic = key;
  renderPMIntro();
}

// ─── INTRO SCREEN ────────────────────────────────────────────
function renderPMIntro() {
  const page = document.getElementById('page-pmchat');
  if (!page) return;
  if (!pmState.topic) { renderPMTopicSelect(); return; }

  const topic = pmChatTopics[pmState.topic];

  page.innerHTML = `
    <div class="section-title">💬 PM Chat Simulator</div>
    <div class="pm-intro-screen">
      <div class="pm-intro-card">
        <button class="pm-change-topic" onclick="renderPMTopicSelect()">← change topic</button>
        <div class="pm-intro-header">
          <div class="pm-phone-frame">
            <div class="pm-phone-notch"></div>
            <div class="pm-phone-screen">
              <div class="pm-chat-preview">
                <div class="pm-bubble pm-bubble-in">Hey! We need to talk about the sprint...</div>
                <div class="pm-bubble pm-bubble-out">We <span style="color:${topic.accent};font-weight:700">${topic.key === 'modal' ? 'should' : 'were notified'}</span> ${topic.key === 'modal' ? 'review the backlog first.' : 'about the issue.'}</div>
                <div class="pm-bubble pm-bubble-in">Good point! ${topic.key === 'modal' ? 'When <span style=\"color:var(--accent-future);font-weight:700\">can</span> we meet?' : 'What <span style=\"color:var(--accent-future);font-weight:700\">was fixed</span>?'}</div>
                <div class="pm-bubble pm-bubble-out">${topic.key === 'modal' ? 'I <span style=\"color:var(--accent-cont);font-weight:700\">could</span> do 3pm today!' : 'The bug <span style=\"color:var(--accent-cont);font-weight:700\">has been fixed</span>.'}</div>
              </div>
            </div>
          </div>
          <div class="pm-intro-text">
            <h2 class="pm-intro-title">You're a developer.<br>Your PM is messaging you.</h2>
            <p class="pm-intro-sub">Topic: <strong>${topic.label}</strong>. Read each message carefully and choose the best professional response.</p>
            <div class="pm-intro-modals">
              ${topic.tagList.map(t => `<span class="pm-modal-pill">${t}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="pm-intro-phases">
          ${topic.scenarios.map((s) => `
            <div class="pm-phase-chip">
              <span class="pm-phase-num" style="background:${topic.accent}">${s.difficulty[0].toUpperCase()}</span>
              <span>${s.phase}</span>
            </div>
          `).join('')}
        </div>
        <p class="pm-topic-meta" style="text-align:center;margin-bottom:14px;">Each session draws ${Object.values(topic.drawCounts).reduce((a,b)=>a+b,0)} random scenarios out of ${topic.scenarios.length} — play again for a new conversation.</p>
        <button class="pm-start-btn" onclick="startPMChat()">
          📱 Start Chat →
        </button>
      </div>
    </div>
  `;
}

// ─── START GAME ──────────────────────────────────────────────
function startPMChat() {
  pmState = {
    topic: pmState.topic,
    scenarios: drawPMScenarios(pmState.topic),
    phase: 0,
    msgIndex: 0,
    answered: false,
    score: 0,
    xpEarned: 0,
    selectedOption: null
  };
  renderPMScene();
}

// ─── RENDER SCENE ────────────────────────────────────────────
function renderPMScene() {
  const page = document.getElementById('page-pmchat');
  if (!page) return;

  const scenario = pmState.scenarios[pmState.phase];
  const progress = Math.round((pmState.phase / pmState.scenarios.length) * 100);

  page.innerHTML = `
    <div class="section-title">💬 PM Chat Simulator</div>

    <div class="pm-game-layout">
      <!-- LEFT: chat panel -->
      <div class="pm-chat-panel">
        <!-- Header -->
        <div class="pm-chat-header">
          <div class="pm-avatar" style="background:${scenario.pmColor}20;border-color:${scenario.pmColor}40;color:${scenario.pmColor}">${scenario.pmAvatar}</div>
          <div>
            <div class="pm-contact-name">${scenario.pmName}</div>
            <div class="pm-contact-role">Project Manager <span class="pm-online-dot"></span> Online</div>
          </div>
          <div class="pm-header-right">
            <span class="pm-diff-badge ${scenario.difficulty}">${scenario.difficulty}</span>
            <div class="pm-phase-badge">${scenario.phase}</div>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="pm-progress-track">
          <div class="pm-progress-fill" style="width:${progress}%"></div>
          <span class="pm-progress-label">Phase ${pmState.phase + 1} of ${pmState.scenarios.length}</span>
        </div>

        <!-- Messages -->
        <div class="pm-messages" id="pmMessages">
          <div class="pm-day-divider">${scenario.phase}</div>
          <div class="pm-bubble-row pm-row-in pm-intro-msg">
            <div class="pm-avatar-sm" style="background:${scenario.pmColor}20;color:${scenario.pmColor}">${scenario.pmAvatar}</div>
            <div class="pm-bubble pm-bubble-in">${scenario.intro}</div>
          </div>
        </div>

        <!-- Typing indicator -->
        <div class="pm-typing" id="pmTyping" style="display:none">
          <div class="pm-avatar-sm" style="background:${scenario.pmColor}20;color:${scenario.pmColor}">${scenario.pmAvatar}</div>
          <div class="pm-typing-dots"><span></span><span></span><span></span></div>
        </div>
      </div>

      <!-- RIGHT: question panel -->
      <div class="pm-question-panel" id="pmQuestionPanel" style="opacity:0;pointer-events:none">
        <div class="pm-q-header">
          <div class="pm-q-icon">🎯</div>
          <div>
            <div class="pm-q-title">Choose your response</div>
            <div class="pm-q-hint">💡 ${scenario.hint}</div>
          </div>
        </div>
        <div class="pm-q-text">${scenario.question}</div>
        <div class="pm-options" id="pmOptions">
          ${scenario.options.map((opt, i) => `
            <button class="pm-option" onclick="selectPMOption(${i})" id="pmOpt${i}">
              <span class="pm-opt-letter">${['A','B','C','D'][i]}</span>
              <span class="pm-opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="pm-feedback" id="pmFeedback" style="display:none"></div>
        <div class="pm-next-row" id="pmNextRow" style="display:none">
          <button class="pm-next-btn" onclick="nextPMPhase()">
            ${pmState.phase + 1 < pmState.scenarios.length ? 'Next Phase →' : 'See Results 🏁'}
          </button>
        </div>
      </div>
    </div>
  `;

  // Animate messages in sequence
  playPMMessages(scenario);
}

// ─── ANIMATE MESSAGES ────────────────────────────────────────
function playPMMessages(scenario) {
  const msgs = scenario.messages;
  let i = 0;

  function sendNext() {
    if (i >= msgs.length) {
      // All messages sent — reveal question panel
      setTimeout(() => {
        const qPanel = document.getElementById('pmQuestionPanel');
        if (qPanel) {
          qPanel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          qPanel.style.transform = 'translateY(10px)';
          qPanel.style.opacity = '0';
          qPanel.style.pointerEvents = 'auto';
          requestAnimationFrame(() => {
            qPanel.style.opacity = '1';
            qPanel.style.transform = 'translateY(0)';
          });
        }
      }, 400);
      return;
    }

    const msg = msgs[i];
    const typing = document.getElementById('pmTyping');
    const messagesEl = document.getElementById('pmMessages');

    // Show typing
    if (typing) typing.style.display = 'flex';

    setTimeout(() => {
      if (typing) typing.style.display = 'none';
      if (messagesEl) {
        const row = document.createElement('div');
        row.className = 'pm-bubble-row pm-row-in pm-msg-animate';
        row.innerHTML = `
          <div class="pm-avatar-sm" style="background:${scenario.pmColor}20;color:${scenario.pmColor}">${scenario.pmAvatar}</div>
          <div class="pm-bubble pm-bubble-in">${msg.text}</div>
        `;
        messagesEl.appendChild(row);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
      i++;
      setTimeout(sendNext, 600);
    }, msg.delay + 1000);
  }

  setTimeout(sendNext, 800);
}

// ─── SELECT OPTION ───────────────────────────────────────────
function selectPMOption(idx) {
  if (pmState.answered) return;
  pmState.answered = true;
  pmState.selectedOption = idx;

  const scenario = pmState.scenarios[pmState.phase];
  const chosen = scenario.options[idx];

  // Disable all, highlight chosen
  scenario.options.forEach((_, i) => {
    const btn = document.getElementById(`pmOpt${i}`);
    if (!btn) return;
    btn.disabled = true;
    if (i === idx) {
      btn.classList.add(chosen.correct ? 'pm-opt-correct' : 'pm-opt-wrong');
    } else if (chosen.correct === false && scenario.options[i].correct) {
      btn.classList.add('pm-opt-correct'); // show correct if they got it wrong
    }
  });

  // Add player's bubble to chat
  const messagesEl = document.getElementById('pmMessages');
  if (messagesEl) {
    const row = document.createElement('div');
    row.className = 'pm-bubble-row pm-row-out pm-msg-animate';
    row.innerHTML = `<div class="pm-bubble pm-bubble-out">${chosen.text}</div>`;
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    // PM reaction
    setTimeout(() => {
      const typing = document.getElementById('pmTyping');
      if (typing) typing.style.display = 'flex';
      setTimeout(() => {
        if (typing) typing.style.display = 'none';
        const reaction = document.createElement('div');
        reaction.className = 'pm-bubble-row pm-row-in pm-msg-animate';
        const pmReaction = chosen.correct
          ? ['👍 Got it, thanks!', '✅ Perfect!', '👌 Great answer!', '💯 Exactly!'][Math.floor(Math.random()*4)]
          : ['Hmm, that doesn\'t sound right...', '❓ Are you sure about that?', 'Let\'s revisit that...'][Math.floor(Math.random()*3)];
        reaction.innerHTML = `
          <div class="pm-avatar-sm" style="background:${pmState.scenarios[pmState.phase].pmColor}20;color:${pmState.scenarios[pmState.phase].pmColor}">${pmState.scenarios[pmState.phase].pmAvatar}</div>
          <div class="pm-bubble pm-bubble-in">${pmReaction}</div>
        `;
        messagesEl.appendChild(reaction);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }, 1200);
    }, 800);
  }

  // XP & score
  if (chosen.correct) {
    pmState.score++;
    const xp = 20;
    pmState.xpEarned += xp;
    if (typeof addXP === 'function') addXP(xp);
    if (typeof showToast === 'function') showToast(`+${xp} XP ⚡`);
  }

  // Show feedback
  const fb = document.getElementById('pmFeedback');
  if (fb) {
    fb.style.display = 'flex';
    fb.className = `pm-feedback ${chosen.correct ? 'pm-fb-ok' : 'pm-fb-bad'}`;

    const tagPills = chosen.tags && chosen.tags.length > 0
      ? chosen.tags.map(t => `<span class="pm-modal-tag-sm">${t}</span>`).join('')
      : '';

    fb.innerHTML = `
      <div class="pm-fb-icon">${chosen.correct ? '✅' : '❌'}</div>
      <div>
        <div class="pm-fb-title">${chosen.correct ? 'Correct response!' : 'Not quite right'}</div>
        ${tagPills ? `<div class="pm-fb-modals">${tagPills}</div>` : ''}
        <div class="pm-fb-exp">${chosen.feedback}</div>
      </div>
    `;
  }

  // Show next
  const nextRow = document.getElementById('pmNextRow');
  if (nextRow) nextRow.style.display = 'flex';
  const nextBtn = nextRow ? nextRow.querySelector('.pm-next-btn') : null;
  if (nextBtn) {
    nextBtn.textContent = pmState.phase + 1 < pmState.scenarios.length ? 'Next Phase →' : 'See Results 🏁';
  }

  if (typeof updateProgress === 'function') updateProgress();
}

// ─── NEXT PHASE ──────────────────────────────────────────────
function nextPMPhase() {
  pmState.phase++;
  pmState.answered = false;
  pmState.selectedOption = null;
  if (pmState.phase >= pmState.scenarios.length) {
    renderPMResult();
  } else {
    renderPMScene();
  }
}

// ─── RESULT ──────────────────────────────────────────────────
function renderPMResult() {
  const page = document.getElementById('page-pmchat');
  const topic = pmChatTopics[pmState.topic];
  const total = pmState.scenarios.length;
  const pct = Math.round((pmState.score / total) * 100);

  let medal = '🥉', title = 'Keep practicing — review the rules!';
  if (pct >= 90) { medal = '🏆'; title = `Outstanding! You're a ${topic.label} master!`; }
  else if (pct >= 70) { medal = '🥇'; title = 'Great work! You communicate like a pro developer!'; }
  else if (pct >= 50) { medal = '🥈'; title = 'Good effort! A bit more practice and you\'ll nail it.'; }

  page.innerHTML = `
    <div class="section-title">💬 PM Chat Simulator</div>
    <div class="pm-result">
      <div class="pm-result-bg">
        <div class="pm-result-medal">${medal}</div>
        <h2 class="pm-result-title">${title}</h2>
        <div class="pm-result-stats">
          <div class="pm-res-stat">
            <div class="pm-res-val" style="color:var(--accent-present)">${pct}%</div>
            <div class="pm-res-label">Score</div>
          </div>
          <div class="pm-res-stat">
            <div class="pm-res-val">${pmState.score}/${total}</div>
            <div class="pm-res-label">Correct</div>
          </div>
          <div class="pm-res-stat">
            <div class="pm-res-val" style="color:var(--accent-future)">+${pmState.xpEarned}</div>
            <div class="pm-res-label">XP Earned</div>
          </div>
        </div>

        <div class="pm-result-recap">
          <div class="pm-recap-title">📋 Practiced — ${topic.label}</div>
          <div class="pm-recap-pills">
            ${topic.tagList.map(t => `<span class="pm-modal-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div class="pm-result-actions">
          <button class="pm-start-btn" onclick="startPMChat()">🔄 Play Again (new mix)</button>
          <button class="pm-outline-btn" onclick="renderPMTopicSelect()">🔁 Change Topic</button>
        </div>
      </div>
    </div>
  `;

  if (typeof createSparkles === 'function' && pct >= 70) createSparkles();
}
