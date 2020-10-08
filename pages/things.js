import ListOfThings from '../components/ListOfThings';

const Things = () => (
    <>
        <ListOfThings things={[
            {name: 'Articles', items: [
            {title: "Creating A Spotify-Powered App Using Nuxt.js", url: "https://www.smashingmagazine.com/2019/03/spotify-app-vue-nuxt-javascript/"},
            {title: "Proganda & Other Lies We Tell", url: "https://medium.com/@cherp/propaganda-other-lies-we-tell-4325240379f7"},
            {title: "Starbucks: Gulps Away From Equality", url: "https://medium.com/@cherp/starbucks-gulps-away-from-equality-6892e972606b"},
            {title: "The big D with big O", url: "https://medium.com/@cherp/the-big-d-with-big-o-632e5cb9f1ca"},
            {title: "Const is fucking useful", url: "https://medium.com/@cherp/const-is-fucking-useful-8f2b4e6652ea"},
            {title: "Half a million people have seen me naked.", url: "https://medium.com/@cherp/half-a-million-people-have-seen-me-naked-e70e8b89269c"},
            {title: "I tried to kill myself.", url: "https://medium.com/@cherp/i-tried-to-kill-myself-3709f9a9bd88"},
            {title: "Adapt or Die (Philosophically)", url: "https://medium.com/@cherp/a-femgineers-womanifesto-67f6278fdb38"},
            {title: "First impressions: 'The Elder Scrolls Online'", url: "https://www.usatoday.com/story/tech/gaming/2014/04/20/elder-scrolls-online-impressions/7864041/"},
            {title: "Five Things We Learned at PAX East", url: "https://www.usatoday.com/story/tech/gaming/2015/03/17/pax-east-best/24839811/"}
        ]}, {name: 'Features', items: [
            {title: "Front End Happy Hour", url: "https://frontendhappyhour.com/episodes/balancing-your-drinks-&-belonging-inclusion-&-diversity-in-tech/"},
            {title: "Software Engineering Unlocked: Part 2", url: "https://www.software-engineering-unlocked.com/disability-at-apple/"},
            {title: "Software Engineering Unlocked: Part 1", url: "https://www.software-engineering-unlocked.com/from-hardship-to-apple/"},
            {title: "#CauseAScene", url: "https://hashtagcauseascene.com/podcast/cher/"},
            {title: "Brainfork", url: "https://anchor.fm/brainfork/episodes/Episode-3-Bipolar-Disorder-in-the-words-of-Cher-Scarlett-e23jd4"},
            {title: "No CS Degree", url: "https://www.nocsdegree.com/falling-down-and-getting-back-up-with-the-help-of-code/"},
            {title: "Microsoft Build", url: "https://channel9.msdn.com/Events/Build/2018/THR2403"},
            {title: "Lipstick Nerds #22", url: "https://www.youtube.com/watch?v=q_EABw0PCOI"},
            {title: "Lipstick Nerds #13", url: "https://www.youtube.com/watch?v=NYKMbnRPBiI"}
        ]}, {name: 'Videos', items: [
            {title: "A little guppy world", url: "https://www.youtube.com/watch?v=xqgVmxwMltc"},
            {title: "Lush chases Reghar across the map", url: "https://www.twitch.tv/videos/40623703"},
            {title: "The Saddest Arena Loss", url: "https://www.twitch.tv/videos/44590912"}
        ]}, {name: 'Podcasts', items: [
            {title: "STOKED! Fireside Chats", url: "https://stoked.fm/"},
            {title: "Flawed Code", url: "https://anchor.fm/cher-dot-dev"}
        ]}]} />
    </>
);
  
export default Things;