import{j as n}from"./index-D0CuwQdU.js";function l(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Changelog"}),`
`,n.jsx(e.p,{children:"All notable changes to this project will be documented in this file."}),`
`,n.jsxs(e.p,{children:["The format is based on ",n.jsx(e.a,{href:"https://keepachangelog.com/en/1.1.0/",children:"Keep a Changelog"}),`,\r
and this project adheres to `,n.jsx(e.a,{href:"https://semver.org/spec/v2.0.0.html",children:"Semantic Versioning"}),"."]}),`
`,n.jsx(e.h2,{children:"Version 1.39.2 - 2025-06-26"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'A tricky bug where moving blocks between buffers could trigger a "Blocked" state.'}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.39.1 - 2025-06-13"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Minor tweaks for summer theme"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.39.0 - 2025-04-13"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Extended spring and summer themes!"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.38.0 - 2025-03-30"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Triggering text selection during play in iOS (Contributed by ",n.jsx(e.strong,{children:"Lennart Klein"}),", thanks!)"]}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Changed how ",n.jsx(e.strong,{children:"Dungeon"}),` levels work. They still have Enemies and Traps, but they are now also\r
multiple stages. You need to decent to the bottom of the dungeon before you defeat a level.`]}),`
`,n.jsx(e.li,{children:"Tweaked difficulty of Dungeon levels, making them harder."}),`
`,n.jsx(e.li,{children:"Updated some help sections to contain visual game elements for clarification."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.37.4 - 2025-03-20"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dungeon levels were falsely reporting 'Blocked!' while a key could still be stored in a chest."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.37.3 - 2025-03-19"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed level 750, thanks for reporting Penny!"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.37.2 - 2025-03-19"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed state of levels for people affected by issues of version rollback of 1.37.1"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.37.1 - 2025-03-18"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Fixed ",n.jsx(e.code,{children:"Error message: Cannot read properties of undefined (reading 'endsWith')"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.37.0 - 2025-03-18"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["New level type, ",n.jsx(e.strong,{children:'"Dungeon"'})," levels! They start from level ",n.jsx(e.strong,{children:"200"}),", and occur every ",n.jsx(e.strong,{children:"50"}),` levels. Defeat enemies and evade traps!\r
You can unlock all difficulties in Zen mode after level 800.`]}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.36.0 - 2025-03-07"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Small code improvement"}),`
`]}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Help content for summer theme"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.35.1 - 2025-01-20"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed showing wide buttons while icon font was still loading"}),`
`,n.jsx(e.li,{children:"Fixed particles for some themes"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.35.0 - 2025-01-11"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Build app using React Compiler, making game more power efficient"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.34.1 - 2025-01-04"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keeping screen awake is more complex on iOS"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.34.0 - 2025-01-04"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep screen awake during level and share and data transfer QR code screen (Thanks Miloslav Nenadál for the suggestion!)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.33.1 - 2024-12-15"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Showing proper level type background in zen mode"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.33.0 - 2024-12-05"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Winter levels are now 6 levels apart instead of 8"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.32.0 - 2024-12-05"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added level layouts to special levels"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Loading indicator is now more fluent"}),`
`,n.jsx(e.li,{children:"Split up content for faster startup time"}),`
`,n.jsx(e.li,{children:"Improved loading times of levels"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.31.1 - 2024-12-02"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed level track message for unlocking Wizard mode at level 268. (Thanks Katie O'Connell for reporting!)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.31.0 - 2024-12-02"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added error boundary around entire app, to catch errors for (manual) reporting"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.30.0 - 2024-12-01"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added help about refreshing installation"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reduced side spacing from buttons at bottom, to get some spacing on Samsung devices"}),`
`,n.jsx(e.li,{children:"Made winter levels less frequent"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Revealed packages should stay revealed until manual restart"}),`
`,n.jsx(e.li,{children:"Level type is now remembered if new level types are introduced or removed"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.29.0 - 2024-11-30"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Used own implementation of 'findLastIndex' to stay on older version of Ecmascript"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Changed to display mode 'fullscreen' for PWA (hopefully hide nav bar on Samsung phones) ",n.jsx(e.strong,{children:"Requires reinstall"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.28.3 - 2024-11-30"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Make max with bit wider so that we keep gaps between columns"}),`
`,n.jsx(e.li,{children:"Fix missing level title in hint mode 'off' sometimes"}),`
`,n.jsx(e.li,{children:"Improved color gradient of start level animation for wide screens"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.28.2 - 2024-11-30"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed scale of block moving animations if content is scaled down due to height restrictions"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.28.1 - 2024-11-29"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fix displaying unlockable zen mode levels that are not available"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.28.0 - 2024-11-29"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Special seasonal level types will also be available in Zen mode during that period"}),`
`,n.jsx(e.li,{children:"Ability to scale level content for smaller displays (Thanks MichaelGoulding for reporting!)"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated the Help dialog, with multiple pages about multiple subjects"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Made the 'blocked!' detection a bit less eager, also fixed some cases where he couldn't detect if you were stuck."}),`
`,n.jsx(e.li,{children:"Improved the moves of the solver, removing a lot of useless moves, making the automoves a lot more efficient."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.27.0 - 2024-11-27"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed stuck detection with buffer columns"}),`
`]}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Zen mode rewards are now also visible on level track"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.26.0 - 2024-11-24"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Auto update theme on activation date"}),`
`,n.jsx(e.li,{children:"More preparations for spring theme"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Improved indication of difficulty increase on level track"}),`
`,n.jsx(e.li,{children:"Updated Share mechanic, added share through QR"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed stuttering on start of level animation"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.25.1 - 2024-11-19"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Render performance improvements"}),`
`,n.jsx(e.li,{children:"Updated level start animation to be more responsive to screen size"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.25.0 - 2024-11-17"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Intro animation for non-normal levels"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.24.0 - 2024-11-16"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Counter to show amount of last levels completed without hints."}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The Hint mode button now also responds to slides."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.23.0 - 2024-11-16"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Toggle to switch from hint mode"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.22.0 - 2024-11-14"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tutorial on level 1 for new players"}),`
`,n.jsx(e.li,{children:"New 'normal' level template for players at level 300 and higher"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.21.0 - 2024-11-13"}),`
`,n.jsx(e.h3,{children:"Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Update styling behind status bar on mobile"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed visible ring around button"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.20.1 - 2024-11-11"}),`
`,n.jsx(e.h3,{children:"Fixes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Some general improvements"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.20.0 - 2024-11-10"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Automoves now will assist till 95% of the solve instead of 50%"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.19.1 - 2024-11-10"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`There was a mismatch in level settings in relation to proven seeds, causing level generation errors.\r
Thanks to Federico for reporting!`}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.19.0 - 2024-11-10"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ability to design more level layouts"}),`
`,n.jsx(e.li,{children:"New Level Type for Spring Season"}),`
`,n.jsx(e.li,{children:"Extra metadata for SEO"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`Level solver logic, making solves more efficient,\r
this caused recreated levels though.`}),`
`,n.jsx(e.li,{children:"Add new icons in the app to align items"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sound should be playing on earlier interaction"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.18.0 - 2024-11-03"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New sound for level restart"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated duration for halloween and christmas theme"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Level track sliding down is now starting from the correct level nr."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.17.0 - 2024-11-01"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated difficulty curve to increase sooner, but in smaller steps (instead of the large hike at 166)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.16.2 - 2024-10-31"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fine-tuned animation"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.16.1 - 2024-10-31"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Start of block animation"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.16.0 - 2024-10-30"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Using different animation strategy, removing animation through path, and start using translate"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.15.1 - 2024-10-27"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"More effort to smoothen animation of blocks"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.15.0 - 2024-10-27"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Additional level template for normal levels above 230."}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Changed visual style to reduce rendering complexity"}),`
`,n.jsx(e.li,{children:"Updated view alignment to center content for larger screens"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.14.3 - 2024-10-26"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Speed improvements for block animation"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.14.2 - 2024-10-26"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Improve responsiveness of touch controls"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.14.1 - 2024-10-25"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tapping (touch) one column and releasing on another now also moves blocks (did not work before)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.14.0 - 2024-10-25"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clicking on one column and releasing on another now also moves blocks (same with touch)"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`The cool new block moving animation has bad performance in iOS stand-alone mode, and is therefor\r
disabled for now. I hope to enable them for iOS soon.`}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.6 - 2024-10-25"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Levels sometimes displaying a different state and resulting in weird results"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`The cool new block moving animation has bad performance in iOS stand-alone mode, and is therefor\r
disabled for now. I hope to enable them for iOS soon.`}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.5 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed block motion on iOS. Apple is gimping the performance so badly, that the move animation is disabled."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.4 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sync of level state and render state when restarting due blocked"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.3 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sync of level state and render state"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.2 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tweak animation timing for better display on iPhone"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.1 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Remove blur of animation, to make rendering lighter"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.13.0 - 2024-10-24"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Animation of blocks moving from column to column"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.12.2 - 2024-10-22"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed reference to non existing asset that could slow down loading when offline"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.12.1 - 2024-10-22"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed asset reference that could prevent quick loading in offline mode"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.12.0 - 2024-10-22"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"In game help screen explaining game mechanics"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.11.0 - 2024-10-18"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reduced lightning effect in fall theme"}),`
`,n.jsx(e.li,{children:"Detection of being stuck while having a free buffer column"}),`
`,n.jsx(e.li,{children:"Updated internal tooling for content management"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.10.4 - 2024-10-17"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Detection of landscape of older browsers"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.10.3 - 2024-10-17"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Improved error information on error screen"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.10.2 - 2024-10-16"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed getting stuck in zen mode if data somehow got incomplete"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.10.1 - 2024-10-15"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed click target of columns, preventing overlap on vertical stacks"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.10.0 - 2024-10-15"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added 'ghost' mode for replay hints halfway during halloween theme"}),`
`,n.jsx(e.li,{children:"Added 'package' mode for revealing blocks halfway during winter theme"}),`
`,n.jsx(e.li,{children:"Basic spring theme (WIP) to run in march/april"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Enabled zen mode at level 30, instead of 50"}),`
`,n.jsx(e.li,{children:"Reduced size of storage format"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.9.0 - 2024-10-13"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Improve responsiveness for columns and zen screen"}),`
`,n.jsx(e.li,{children:"Feedback and donate buttons, per request of users 😊"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Restructured settings screen to have more options in an advanced section"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.8.0 - 2024-10-11"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sound effect for jumping smiley"}),`
`,n.jsx(e.li,{children:"Pre-seeded list for each level setting, to eliminate loading times"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clicking close in settings will not propagate to play button"}),`
`,n.jsx(e.li,{children:"When transfer image is from different version, the conflict will now be shown"}),`
`,n.jsx(e.li,{children:"Improved definition of being 'blocked'"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.7.0 - 2024-10-10"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Labels to options in 'zen mode' screen"}),`
`,n.jsx(e.li,{children:"New special level type, with steps buffer"}),`
`,n.jsx(e.li,{children:"Animation on main track to let player jump to next level"}),`
`,n.jsx(e.li,{children:"Always ask for confirmation before import"}),`
`,n.jsx(e.li,{children:"Reveal block if not earlier revealed when column is completed with same colors"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated the difficulty of some of the special templates"}),`
`]}),`
`,n.jsx(e.h3,{children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The beta label on the data transfer"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.6.2 - 2024-10-10"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed loading of level 360"}),`
`]}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Decent error screen if level generation fails with email and back option"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.6.1 - 2024-10-08"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set screen orientation to portrait (Only Android supports this) ",n.jsx(e.strong,{children:"Requires reinstall"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reduced data in export, to succeed for most complex levels"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.6.0 - 2024-10-08"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Data transfer option through the settings screen, to move progress from one instance to another"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.5.1 - 2024-10-08"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Some padding issues"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.5.0 - 2024-10-08"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Event calendar button to display current or upcoming theme"}),`
`]}),`
`,n.jsx(e.h3,{children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed Option to disable particles. The performance issues have been resolved. (simplifies settings screen)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.4.0 - 2024-10-06"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Installation prompt"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.3.2 - 2024-10-06"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pumpkin being stubborn"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.3.1 - 2024-10-06"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pumpkin was rolling out of screen!"}),`
`,n.jsx(e.li,{children:"Reduced movement speed of ghosts"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.3.0 - 2024-10-06"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pumpkin will move to other side of the screen to prevent being behind a button"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built own mini CSS particle engine for the ghosts / snow. Hopefully smoother!"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.2.0 - 2024-10-06"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated the ramp up of difficulty"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The flying ghosts are not fully rendered on android, an investigation is ongoing"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.1.0 - 2024-10-05"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Option to disable particles"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated some colors to make them more distinguishable"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The flying ghosts are not fully rendered on android, an investigation is ongoing"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.0.3 - 2024-10-04"}),`
`,n.jsx(e.h3,{children:"Fixes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Background recoloring on start to a wrong state"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The flying ghosts are not fully rendered on android, an investigation is ongoing"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.0.2 - 2024-10-04"}),`
`,n.jsx(e.h3,{children:"Fixes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed scrollbar caused by pumpkin"}),`
`,n.jsx(e.li,{children:"Updated some build specs in hope to improve performance"}),`
`]}),`
`,n.jsx(e.h3,{children:"Known issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The flying ghosts are not fully rendered on android, an investigation is ongoing"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.0.1 - 2024-10-04"}),`
`,n.jsx(e.h3,{children:"Fixes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updates color of one of the orange halloween blocks to be more distinguishable"}),`
`,n.jsx(e.li,{children:"Set frames per second of particles to 30fps, to prevent stutter"}),`
`,n.jsx(e.li,{children:"Added explicit control variant to emoji's to prevent coffin outline on android phones"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 1.0.0 - 2024-10-04"}),`
`,n.jsx(e.p,{children:"The introduction of themes! Themes change block colors and symbols, music and backgrounds."}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fall/Halloween theme, runs from 1 oct till 8 nov"}),`
`,n.jsx(e.li,{children:"Winter/Christmas theme, runs from 1 dec till 8 jan"}),`
`,n.jsx(e.li,{children:"Setting to switch back form themed content"}),`
`,n.jsx(e.li,{children:"Lazy loading audio to prevent pre-loading themed music that is not used"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Block types picked for special levels start at the end of color range"}),`
`,n.jsx(e.li,{children:"Converted mp3 music to aac, to have smaller files"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.9.0 - 2024-10-03"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Visibility of Changelog in the game settings"}),`
`,n.jsx(e.li,{children:"Visibility of asset attribution in the game settings"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Icon of 'zen' mode is updated, for better contrast"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.8.0 - 2024-10-01"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Zen mode, to play one-off levels of desired type and difficulty"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Level nr is now shown between buttons (when no automoves available)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.7.1 - 2024-10-01"}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Misspelled button label in level track"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.7.0 - 2024-09-30"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pressed state for play button"}),`
`,n.jsx(e.li,{children:"Hard levels are now either fully hidden, or hidden in checkerboard going from level 102 and up"}),`
`,n.jsx(e.li,{children:"Special levels can now contain checkerboard hidden blocks from level 200 going up"}),`
`,n.jsx(e.li,{children:"Level number visible in level, by request from users"}),`
`,n.jsx(e.li,{children:"More win sentences"}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Rebalanced AutoMove"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.6.1 - 2024-09-27"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"List proper version number in settings"}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Auto moves was wrongly initialized, and shown to early"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.6.0 - 2024-09-27"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Styling to PWA Update Toast message"}),`
`,n.jsx(e.li,{children:"An auto move button to spend some moves towards a solve when you got blocked more than 10 times"}),`
`,n.jsx(e.li,{children:"Extra verification if level is winnable"}),`
`,n.jsx(e.li,{children:"Fix of random move (shadowed vars caused illegal moves)"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.5.0 - 2024-09-27"}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["App logo - ",n.jsx(e.strong,{children:"Requires reinstall"})]}),`
`,n.jsx(e.li,{children:"Solver now has only one try per generated level, this speeds up level loading"}),`
`,n.jsx(e.li,{children:"Colors only fade if going from hidden to revealed"}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.4.0 - 2024-09-27"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styling of hidden block, to offset them better against normal blocks."}),`
`,n.jsx(e.li,{children:"Added fade animation when block gets revealed."}),`
`,n.jsx(e.li,{children:"Max width for column distribution, for desktop play."}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`Colors are now added in batches of 4.\r
If a level has 4 colors, it always picks from the first 4 colors.\r
If it has 6 colors, it picks from the first 8.`}),`
`,n.jsx(e.li,{children:'Changed lose message to "Blocked!".'}),`
`,n.jsx(e.li,{children:"Changed win message to a random positive word."}),`
`]}),`
`,n.jsx(e.h3,{children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Audio started playing when disabled."}),`
`]}),`
`,n.jsx(e.h2,{children:"Version 0.3.0 - 2024-09-26"}),`
`,n.jsx(e.h3,{children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Extra colors! There are now 16 types of blocks!"}),`
`,n.jsx(e.li,{children:`Updated special template that (with increasing difficulty) will leverage\r
all 16 colors.`}),`
`,n.jsx(e.li,{children:"Added a loading indicator animation."}),`
`]}),`
`,n.jsx(e.h3,{children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Loading of levels should be a lot faster now."}),`
`]})]})}function s(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}const d=()=>n.jsx(s,{});export{d as default};
