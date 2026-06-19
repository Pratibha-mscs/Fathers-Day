/* ============================================================
   Anjalee's Letter — An Interactive Memory Storybook
   A luxury, page-turning keepsake nested inside the scrapbook.
   ============================================================ */

(function () {
  "use strict";

  /* ------------------------------------------------------------
     CHAPTER CONTENT
     Each chapter becomes a themed title page followed by as many
     gently-paginated story pages as the prose needs.
  ------------------------------------------------------------ */
  const CHAPTERS = [
    {
      emoji: "🦋",
      title: "Before I Knew What Love Looked Like",
      subtitle: "It looked like butterflies, pink gifts, and a man always somewhere in the background.",
      theme: "love",
      hidden: [
        { icon: "🦋", note: "our butterfly" },
        { icon: "🎁", note: "always pink" },
        { icon: "🌼", note: "the garden" }
      ],
      lines: [
        "When I think about my childhood, I don't remember it in a straight line. I remember it in flashes. Tiny moments. Little scenes that stayed with me long after the days themselves disappeared.",
        "And somehow, whenever I revisit those memories, you're always there. Not always at the center. Sometimes just watching. Sometimes smiling. But always there.",
        "I remember running through gardens trying to catch butterflies, convinced that if I ran just a little faster I'd finally catch one. And somewhere nearby, there you were. Watching. Laughing.",
        "At the time, it felt ordinary. Now I realize those moments were never ordinary at all. Because childhood isn't made of big events. It's made of small moments that feel safe enough to become memories.",
        "I remember visiting your office and feeling so important because I got to see where Dad worked — secretly convinced that my father was the most important person in the building. A part of me still feels that way.",
        "I remember the little gifts too. Especially the pink ones. Pink bags, pink stationery, pink little trinkets that made no sense to anyone else. But you always knew exactly what would make me smile.",
        "Looking back, I don't even remember most of the gifts themselves. What I remember is the thought behind them. The way you paid attention. The way you remembered what your daughters liked.",
        "Love is a strange thing. When we're young, we think it's something huge and dramatic. But the older I get, the more I realize that love often hides inside very small things.",
        "Inside someone standing nearby while you chase butterflies. Inside someone taking you to work because they want you to be part of their world.",
        "Before I understood sacrifice or responsibility, I understood something simpler. I understood that I felt safe around you. I understood that life felt a little brighter when you were there.",
        "Because when I look back, I don't just see butterflies, or pink gifts, or office visits. I see a father quietly building a childhood that felt full of wonder — making ordinary days feel special without ever trying to.",
        "And somehow, those ordinary moments became some of the most extraordinary memories of my life."
      ]
    },
    {
      emoji: "🏔️",
      title: "The Rope Bridge",
      subtitle: "You believed I could before I did.",
      theme: "mountain",
      hidden: [
        { icon: "🏔️", note: "Manali, remember?" },
        { icon: "🌉", note: "the crossing" },
        { icon: "📍", note: "the first step" }
      ],
      lines: [
        "There are some memories that stay with us because they were important. And then there are memories that stay with us because, years later, we realize they were trying to teach us something.",
        "Manali is one of those memories for me.",
        "I remember standing there looking at the rope crossing stretched across the river below.",
        "The water seemed louder than it probably was. The distance seemed longer than it probably was. And the challenge seemed much bigger than it probably was. At least to a little girl who was terrified.",
        "I remember thinking there was absolutely no way I could do it. No way I could make it across. No way I was brave enough.",
        "And then there was you. Not pushing me. Not forcing me. Not telling me I had to.",
        "Just standing there with the kind of confidence that somehow made me borrow a little of it for myself.",
        "You believed I could do it before I did. And somehow that changed everything.",
        "Looking back now, I don't think that memory stayed with me because of a rope bridge. I think it stayed with me because it was one of the first times I learned what it feels like when someone believes in you.",
        "Sometimes courage isn't something we find on our own. Sometimes it comes from someone standing beside us and saying, \"I know you can do this.\"",
        "And that's what you've done for me over and over again throughout my life. Long after Manali. Long after the river. Long after the rope bridge disappeared into a memory.",
        "Whenever life has placed something difficult in front of me, a part of me still goes back to that little girl standing at the edge of the crossing.",
        "And somehow I still hear your voice. The same voice reminding me that fear doesn't mean stop. The same voice reminding me that I am stronger than I think. The same voice reminding me to take the first step.",
        "You probably thought you were helping me cross a river that day. But what you really gave me was something much bigger.",
        "You taught me how to trust myself. And years later, I'm still carrying that lesson with me."
      ]
    },
    {
      emoji: "📷",
      title: "The Keeper of Our Memories",
      subtitle: "You were busy saving moments while we were busy living them.",
      theme: "camera",
      hidden: [
        { icon: "📷", note: "you recorded everything" },
        { icon: "🎞️", note: "old home videos" },
        { icon: "✨", note: "present in every frame" }
      ],
      lines: [
        "If someone asked me to describe my childhood in one image, I think it would be you holding that little camera.",
        "It was everywhere. Family trips. Vacations. Random afternoons. Ordinary days that didn't seem important at the time. Somehow that camera always appeared.",
        "And honestly, when I was younger, I didn't understand why. I remember thinking, \"Why is Dad recording this too?\"",
        "Looking back now, I understand. You knew something I didn't.",
        "You knew that moments disappear. You knew childhood moves faster than anyone realizes. You knew that one day your daughters would grow up.",
        "And maybe, just maybe, they would want to go back.",
        "So while we were busy living those moments, you were preserving them. You became the keeper of our memories. The family historian.",
        "The person quietly making sure that one day we'd be able to return to the people we used to be.",
        "There is something incredibly beautiful about that. Because most of us don't realize we're living a memory while it's happening. We only recognize it years later.",
        "Years later when we hear a familiar laugh. Years later when we see an old photograph. Years later when we watch an old video and suddenly find ourselves standing in a moment we thought was gone forever.",
        "And somehow, you've given us so many of those moments.",
        "When I look at those videos now, I don't just see places. I don't just see vacations. I don't just see family trips.",
        "I see us. I see our family. I see the little versions of ourselves that no longer exist.",
        "And most importantly, I see you. Behind the camera. Around the camera. Sometimes barely visible because you were the one recording. But somehow present in every frame anyway.",
        "And maybe that's what love looks like sometimes. Not standing in the spotlight. Not asking to be seen. Just quietly making sure everyone else's memories survive.",
        "You spent years making sure we would never lose our memories. And today, I want you to know that I haven't lost the memory of that either."
      ]
    },
    {
      emoji: "🎟️",
      title: "The Years You Gave Away",
      subtitle: "The greatest acts of love often happen quietly.",
      theme: "tickets",
      hidden: [
        { icon: "🎟️", note: "the long way home" },
        { icon: "🧳", note: "years away" },
        { icon: "✉️", note: "never kept score" }
      ],
      lines: [
        "As a child, I thought love looked like the things I could see. The gifts. The trips. The memories. The time spent together.",
        "But as I've grown older, I've realized that some of the greatest acts of love are the ones nobody sees at all.",
        "They're the sacrifices. The choices. The things people give up without ever talking about them.",
        "And when I think about your life, I think about all the years you quietly gave away for us.",
        "Years when you lived away from your family. Years when you woke up alone. Years when you carried responsibilities that most people would never fully understand.",
        "Years when you chose duty over comfort. Years when you chose our future over your present.",
        "As a child, I only saw the result. I saw the opportunities. I saw the stability. I saw the life you created for us.",
        "I didn't see what it cost. I didn't see the lonely evenings. The missed moments. The exhaustion. The pressure. The constant responsibility of making sure everyone else was okay.",
        "I understand it more now. And honestly, the older I get, the more amazed I become.",
        "Because if there's one thing I've learned about adulthood, it's that life is hard. Even when you're only responsible for yourself.",
        "And yet somehow you carried an entire family on your shoulders and still found ways to make us feel loved. Still found ways to make us laugh. Still found ways to make us feel safe.",
        "You never made your sacrifices feel like debts we owed. You never kept score. You never asked for recognition. You simply loved us and kept going.",
        "And I think that's why it took me so long to understand the full weight of what you did. Because the people who sacrifice the most are often the ones who talk about it the least.",
        "When I was younger, I thought you were building a career. Now I realize you were building a life for us.",
        "And if there is one thing I hope you never question, it is whether it was worth it.",
        "Because it was. Every long day. Every lonely year. Every sacrifice. Every single one."
      ]
    },
    {
      emoji: "📖",
      title: "The Day I Thought I Failed",
      subtitle: "You never reduced me to a result.",
      theme: "exam",
      hidden: [
        { icon: "📖", note: "one exam, not my life" },
        { icon: "✏️", note: "years of effort" },
        { icon: "🌱", note: "still so much ahead" }
      ],
      lines: [
        "There are moments in life that quietly change the way we see ourselves. For me, one of those moments was not cracking NEET.",
        "I know now that life is bigger than one exam. I know now that a single result cannot define an entire person. But back then, it didn't feel that way.",
        "Back then, it felt enormous. It felt like years of effort had led to a door that refused to open. It felt like watching a version of my future disappear in front of me.",
        "And the hardest part wasn't disappointing anyone else. It was disappointing myself.",
        "Because nobody is harder on me than I am. I replay mistakes. I overthink failures. I hold onto things long after everyone else has moved on.",
        "And during that time, when all I could see was what I hadn't achieved, you somehow kept seeing something more.",
        "You never looked at me like I was a failure. You never made me feel like my worth depended on a score. You never treated me like a result. You treated me like your daughter.",
        "And maybe that sounds simple. But it meant everything.",
        "Because the world is full of people who celebrate success. The people who stay beside you when you fail are much rarer.",
        "You reminded me that one exam could never define an entire life. You reminded me that setbacks are chapters, not endings. You reminded me that there was still so much life ahead of me.",
        "And even when I couldn't fully believe those things myself, I believed you. Because I always have.",
        "Looking back now, I think the greatest gift you gave me during that time wasn't advice. It was perspective.",
        "You helped me understand that failure isn't the opposite of success. Sometimes it's part of the path toward it.",
        "And even today, whenever life doesn't go according to plan, I find myself remembering that version of you. The one who stood beside me without judgment. The one who never reduced me to a result. The one who reminded me that my future was always bigger than my disappointment.",
        "And I don't think I'll ever forget that."
      ]
    },
    {
      emoji: "☎️",
      title: "A Phone Call I Carry With Me",
      subtitle: "Some conversations never really end.",
      theme: "phone",
      hidden: [
        { icon: "☎️", note: "your voice, still here" },
        { icon: "📝", note: "hard work never wasted" },
        { icon: "🌱", note: "seeds we water today" }
      ],
      lines: [
        "There are conversations we remember because they were important. And then there are conversations we remember because they became part of us. This was one of those conversations.",
        "I remember my first year of college. I remember trying. Really trying. Studying for hours. Putting in the effort. Doing everything I thought I was supposed to do.",
        "And yet somehow the results weren't matching the effort. It felt frustrating in a way that's difficult to explain.",
        "Because failure hurts. But trying your hardest and still falling short hurts differently. It makes you question yourself. It makes you question whether you're good enough. Whether you're capable enough. Whether all the effort is even worth it.",
        "I remember calling you. Maybe for you it was just another phone call. But for me, it became one of those moments that quietly stays with a person forever.",
        "You told me something so simple. You said that hard work never goes to waste. Maybe not immediately. Maybe not in the way we expect. But it always finds its way back.",
        "You told me that effort compounds quietly before it becomes visible. That just because I couldn't see the results yet didn't mean they weren't being built.",
        "I don't know if you realized it then. But those words stayed. They settled somewhere deep inside me.",
        "And even today, whenever I lose hope, I go back to them. Whenever life feels uncertain. Whenever I compare myself to others. Whenever I feel behind. Whenever I start questioning myself. Whenever I feel like giving up.",
        "I hear your voice. Reminding me to keep going. Reminding me to trust the process. Reminding me that the seeds we water today often bloom long after we've stopped looking at the soil.",
        "And I carry that lesson with me every single day. Not because it's motivational. Not because it sounds nice. But because you've lived it. You spent your entire life proving it.",
        "And every time I choose not to quit, there is a part of that decision that belongs to you."
      ]
    },
    {
      emoji: "🌻",
      title: "Lessons You Never Knew You Were Teaching",
      subtitle: "I learned more from watching you than from listening to anyone else.",
      theme: "lessons",
      hidden: [
        { icon: "🌻", note: "love is something you do" },
        { icon: "💛", note: "kindness is strength" },
        { icon: "🌱", note: "values that stayed" }
      ],
      lines: [
        "One of the strangest parts of growing up is realizing that some of the most important lessons you ever learned were never actually taught.",
        "Nobody sat you down. Nobody gave a lecture. Nobody wrote them on a whiteboard. You simply absorbed them by watching someone live.",
        "That's what happened with you. So much of what I believe today comes from watching you.",
        "Watching how you approached responsibility. Watching how you handled difficult situations. Watching how you kept going when life became hard. Watching how you treated people. Watching how you carried yourself.",
        "You taught me that work ethic isn't about motivation. It's about showing up even when you don't feel like it.",
        "You taught me that resilience isn't about never struggling. It's about refusing to stay down.",
        "You taught me that kindness is not weakness. It's strength. You taught me that character matters far more than appearances.",
        "And perhaps the biggest lesson of all: you taught me that love is something you do. Not something you say.",
        "You loved through action. Through sacrifice. Through consistency. Through presence. Through responsibility.",
        "And I think that's why your lessons stayed with me. Because they weren't words. They were examples.",
        "The older I get, the more grateful I become for that. Because years later, I still find myself making decisions based on values you quietly taught me.",
        "Years later, I still hear your voice in moments when life gets difficult. Years later, I still find pieces of you in the person I am becoming.",
        "And honestly, I think that's one of the greatest gifts a parent can leave behind. Not money. Not possessions. Not achievements. But values that continue living inside their children long after the lesson itself is forgotten.",
        "And if there is one thing I know for certain, it is this: a lot of the best parts of me began with you."
      ]
    },
    {
      emoji: "🌅",
      title: "One Day",
      subtitle: "The hands that held mine will never walk alone.",
      theme: "sunset",
      hidden: [
        { icon: "🌅", note: "your turn to rest" },
        { icon: "🕊️", note: "you won't be alone" },
        { icon: "🤍", note: "love changes direction" }
      ],
      lines: [
        "Dad, there is one thing I think about more and more as I grow older.",
        "For as long as I can remember, you've been the person everyone depended on. The person who solved the problems. The person who carried the responsibility. The person who worried about everyone else before worrying about himself.",
        "The person who always seemed strong enough to handle whatever life placed in front of him.",
        "And maybe that's why it's so difficult for me to imagine a version of you that isn't carrying something. A responsibility. A concern. A plan. A burden. A dream for someone else.",
        "But the truth is, Dad, you've spent so much of your life taking care of other people. And one day, I want it to be your turn.",
        "One day, I want you to wake up without carrying the weight of everyone's future on your shoulders. One day, I want you to stop worrying about whether we'll be okay.",
        "Because we will be. You made sure of that.",
        "Everything you've spent your life teaching us worked. The values. The lessons. The strength. The resilience. The love. It worked.",
        "And one day, I hope you finally allow yourself to rest. Not because you've stopped being needed. But because you've earned it.",
        "I want you to know that when that day comes, you won't be standing alone.",
        "The hands that held mine when I was learning to walk will never have to walk alone. The person who spent years making me feel safe will always have a place where he feels safe too.",
        "You spent years checking if I had eaten. One day, I'll be the one reminding you.",
        "You spent years making sure I got home safely. One day, I'll be the one waiting for you.",
        "You spent years carrying me. One day, if life feels heavy, I'll help carry you too.",
        "Because love doesn't end when children grow up. It simply changes direction.",
        "And if there is one promise I want to leave you with, it is this: no matter how old I get. No matter where life takes me. No matter how much time passes. You will never have to face life alone.",
        "Not while I'm here. Not after everything you've done for me. Not after everything you've given us.",
        "You spent your life being our shelter. One day, I hope I can be yours."
      ]
    },
    {
      emoji: "🌟",
      title: "I Am Proud Of You",
      subtitle: "Not just because you're my father. Because of the life you've lived.",
      theme: "proud",
      hidden: [
        { icon: "🌟", note: "the way you succeeded" },
        { icon: "🏅", note: "you never gave up" },
        { icon: "✨", note: "without losing your heart" }
      ],
      lines: [
        "There is something I don't think children tell their parents enough. We're proud of you too.",
        "Not just grateful. Not just thankful. Proud.",
        "Because the older I get, the more I realize how difficult life actually is. How easy it is to become bitter. How easy it is to become selfish. How easy it is to stop trying.",
        "And yet somehow, you never became that person.",
        "Life gave you challenges. Life gave you sacrifices. Life gave you responsibilities that would have overwhelmed many people.",
        "And still, you remained kind. You remained generous. You remained hopeful. You remained you.",
        "And I think that's one of the things I admire most about you. Not that you succeeded. But the way you succeeded.",
        "Not that you carried responsibilities. But the grace with which you carried them. Not that you worked hard. But that you worked hard without losing your heart.",
        "The more stories I hear about your life, the more respect I have for you. Because every story reminds me of the same thing.",
        "You never gave up. You kept showing up. You kept trying. You kept building. You kept believing.",
        "And because of that, generations after you will benefit from things they will never fully understand.",
        "Sometimes I wonder if you realize how many lives you've touched. How much of who I am came from you. How much of my strength came from watching yours. How much of my resilience came from watching yours. How much of my understanding of love came from watching yours.",
        "You often tell us to be proud of ourselves. Today I want you to know something. I'm proud of you. Deeply. Completely.",
        "And not because you're my father. But because if I met you as a stranger and heard your story, I'd still admire the person you became."
      ]
    },
    {
      emoji: "🕊️",
      title: "The Pieces Of You I Carry",
      subtitle: "Before you were the person I looked up to, you were the person I looked for.",
      theme: "carry",
      hidden: [
        { icon: "🕊️", note: "you never really leave" },
        { icon: "🍃", note: "a piece of you, everywhere" },
        { icon: "🤍", note: "never truly alone" }
      ],
      lines: [
        "Maybe that's the thing I've been trying to say throughout this entire letter. When I look at my life, I see you everywhere.",
        "Not just in the memories. Not just in the photographs. Not just in the stories. I see you in myself.",
        "I see you in the way I keep going when things become difficult. I see you in the way I care about people. I see you in the way I refuse to give up. I see you in the way I love.",
        "Sometimes I catch myself saying something and realize it sounds exactly like you. Sometimes I react to something and realize I learned it from you years ago. Sometimes I make a decision and only later understand that it's based on a value you quietly taught me.",
        "And I think that's one of the most beautiful things about being loved by a parent. They never really leave you.",
        "A piece of them follows you into every room. Into every dream. Into every challenge. Into every version of yourself.",
        "Even when they're not standing beside you, somehow they still are. Their voice still finds you. Their lessons still find you. Their love still finds you.",
        "And maybe that's why I've never truly felt alone. Because no matter where I go, I carry pieces of you with me.",
        "There are moments when I'm scared and I hear your encouragement. Moments when I want to quit and I remember your faith. Moments when life feels uncertain and I borrow courage from you. And somehow things become possible again.",
        "Before you were the person I looked up to, you were the person I looked for. The face I searched for in a crowd. The voice I wanted to hear when something went wrong. The person who could somehow make everything feel okay.",
        "And after all these years, a part of me still feels that way. Because no matter how much I grow, there will always be a little girl inside me who feels safer when Dad is around.",
        "And honestly? I hope that part of me never goes away."
      ]
    },
    {
      emoji: "❤️",
      title: "The Answer Is Yes",
      subtitle: "If you ever wonder whether you did enough — let this be your answer.",
      theme: "yes",
      hidden: [
        { icon: "💌", note: "it was worth it" },
        { icon: "🌹", note: "deeply, completely loved" },
        { icon: "❤️", note: "always" }
      ],
      lines: [
        "Dad, there is one thing I've realized while writing all of this.",
        "Children spend most of their lives growing up. Parents spend most of their lives letting go.",
        "You spent years holding my hand. Teaching me. Protecting me. Worrying about me. Believing in me.",
        "And somewhere along the way, without either of us noticing, I grew up.",
        "The little girl chasing butterflies became someone writing letters. The little girl who needed help crossing rivers became someone trying to find her own path. The little girl who looked for her father in every crowd became someone who now carries him everywhere she goes.",
        "And I think that's what makes this so emotional for me. Because no matter how old I become, I still cannot imagine my story without you in it.",
        "When people look at me, they see Anjalee. But what they don't see is all the pieces of you that helped build her.",
        "They don't see the years you spent away from home. They don't see the sacrifices. They don't see the worries. They don't see the love hidden inside ordinary days.",
        "But I do. I see it now. I see it in every opportunity I have. I see it in every dream I chase. I see it in every door that opened because you spent years making sure I would have the chance to knock on it.",
        "And if I could tell you only one thing for the rest of my life, it would be this: it was worth it.",
        "Every long day. Every difficult year. Every sacrifice. Every moment you wondered if you were doing enough. Every moment you worried about our future. Every moment you put yourself second. It was worth it.",
        "Because you didn't just build a life for us. You became the reason we believed we could build one for ourselves.",
        "You didn't just give us a home. You gave us a place in the world where we always felt loved.",
        "You didn't just raise children. You raised people who will spend the rest of their lives grateful that they got to call you Dad.",
        "And maybe one day, decades from now, when the photographs have faded a little and the stories have been told a hundred times over, there will still be one thing I know with complete certainty.",
        "I was loved. Deeply. Completely. Unconditionally. And one of the greatest privileges of my life was being loved by you.",
        "So if you ever find yourself wondering whether you did enough... whether you were enough... whether all those years of hard work meant something... let this be your answer.",
        "Yes. A thousand times yes. You were enough. You did enough. You gave us more than enough.",
        "And if I spend the rest of my life becoming even half the person you are, I will consider it a life well lived.",
        "Because before you were my hero... before you were my role model... before you were the person I looked up to... you were simply Dad.",
        "And somehow, that was always more than enough."
      ]
    }
  ];

  /* Family photos pinned as polaroids around the book.
     Drop your images into a /photos folder using these file names.
     Captions are easy to edit here. */
  const PHOTOS = [
    { src: "photos/1.jpg", cap: "you & me ✿",        top: "12%", left: "3%",  rot: -7 },
    { src: "photos/2.jpg", cap: "all of us, home",   top: "41%", left: "1.5%", rot:  5 },
    { src: "photos/3.jpg", cap: "where it began",    top: "69%", left: "4%",   rot: -4 },
    { src: "photos/4.jpg", cap: "the mountain days", top: "17%", left: "85%",  rot:  6 },
    { src: "photos/5.jpg", cap: "still going ✦",      top: "63%", left: "84%",  rot: -6 }
  ];

  /* universal slow-floating scrapbook objects, present on every page */
  const BASE_FLOATIES = ["⭐", "🦋", "✨", "🌼", "🎀", "☁️", "💌", "🌷", "📸", "🎈"];

  /* extra themed objects layered in per chapter */
  const THEME_FLOATIES = {
    love:    ["🦋", "🎁", "🌸", "🌼"],
    mountain:["🏔️", "⛰️", "🌉", "🧭"],
    camera:  ["📷", "🎞️", "🖼️", "✨"],
    tickets: ["🎟️", "🧳", "✉️", "🚂"],
    exam:    ["📖", "✏️", "📚", "🌱"],
    phone:   ["☎️", "📞", "📝", "💭"],
    lessons: ["🌻", "🌱", "💛", "🍯"],
    sunset:  ["🌅", "🌇", "🕊️", "🧡"],
    proud:   ["🌟", "✨", "🏅", "💫"],
    carry:   ["🕊️", "🍃", "🤍", "🌙"],
    yes:     ["❤️", "💌", "🌹", "💖"]
  };

  const ROMAN = ["One", "Two", "Three", "Four", "Five", "Six", "Seven",
                 "Eight", "Nine", "Ten", "Eleven", "Twelve"];

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
     DOM scaffolding (built once, on first open)
  ------------------------------------------------------------ */
  let root, stage, pageEl, measurer, progressEl, bookmarkEl,
      floatiesEl, petalsEl, hiddenEl, whisperEl, prevBtn, nextBtn, photosEl;
  let built = false;

  let pages = [];        // flattened list of page descriptors
  let index = 0;         // current page
  let turning = false;
  let petalTimer = null;

  function build() {
    root = document.createElement("div");
    root.className = "storybook";
    root.id = "storybook";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML = [
      '<div class="sb-bg" aria-hidden="true"></div>',
      '<div class="sb-vignette" aria-hidden="true"></div>',
      '<div class="sb-petals" aria-hidden="true"></div>',
      '<div class="sb-floaties" aria-hidden="true"></div>',
      '<div class="sb-photos" aria-hidden="true"></div>',
      '<div class="sb-hidden" aria-hidden="true"></div>',
      '<button class="sb-close" type="button" aria-label="Close the book">✕ close the book</button>',
      '<div class="sb-stage">',
      '  <button class="sb-nav sb-prev" type="button" aria-label="Previous page">‹</button>',
      '  <div class="sb-book">',
      '    <div class="sb-page" id="sbPage" role="article" aria-live="polite"></div>',
      '    <span class="sb-bookmark" aria-hidden="true"></span>',
      '  </div>',
      '  <button class="sb-nav sb-next" type="button" aria-label="Next page">›</button>',
      '</div>',
      '<div class="sb-progress"><span id="sbProgress"></span></div>',
      '<div class="sb-measurer sb-page" id="sbMeasurer" aria-hidden="true"></div>',
      '<div class="sb-whisper" id="sbWhisper" aria-hidden="true"></div>'
    ].join("");
    document.body.appendChild(root);

    stage      = root.querySelector(".sb-stage");
    pageEl     = root.querySelector("#sbPage");
    measurer   = root.querySelector("#sbMeasurer");
    progressEl = root.querySelector("#sbProgress");
    bookmarkEl = root.querySelector(".sb-bookmark");
    floatiesEl = root.querySelector(".sb-floaties");
    photosEl   = root.querySelector(".sb-photos");
    petalsEl   = root.querySelector(".sb-petals");
    hiddenEl   = root.querySelector(".sb-hidden");
    whisperEl  = root.querySelector("#sbWhisper");
    prevBtn    = root.querySelector(".sb-prev");
    nextBtn    = root.querySelector(".sb-next");

    prevBtn.addEventListener("click", function () { go(-1); });
    nextBtn.addEventListener("click", function () { go(1); });
    root.querySelector(".sb-close").addEventListener("click", close);

    // click the right/left half of the page to turn, like a real book
    pageEl.addEventListener("click", function (e) {
      const r = pageEl.getBoundingClientRect();
      go(e.clientX - r.left > r.width / 2 ? 1 : -1);
    });

    document.addEventListener("keydown", function (e) {
      if (root.getAttribute("aria-hidden") === "true") return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Escape") close();
    });

    let rt;
    window.addEventListener("resize", function () {
      if (root.getAttribute("aria-hidden") === "true") return;
      clearTimeout(rt);
      rt = setTimeout(repaginate, 250);
    });

    buildPhotos();
    built = true;
  }

  /* taped polaroids of family photos scattered around the book */
  function buildPhotos() {
    photosEl.innerHTML = "";
    PHOTOS.forEach(function (ph, i) {
      const fig = document.createElement("figure");
      fig.className = "sb-photo";
      fig.style.top = ph.top;
      fig.style.left = ph.left;
      fig.style.setProperty("--r", ph.rot + "deg");
      fig.dataset.depth = (0.3 + (i % 3) * 0.18).toFixed(2);
      fig.style.animationDelay = (-i * 1.3) + "s";

      const img = document.createElement("img");
      img.src = ph.src;
      img.alt = ph.cap;
      img.loading = "lazy";
      // if a photo file isn't there yet, hide that polaroid gracefully
      img.addEventListener("error", function () { fig.style.display = "none"; });

      const cap = document.createElement("figcaption");
      cap.textContent = ph.cap;

      fig.appendChild(img);
      fig.appendChild(cap);
      photosEl.appendChild(fig);
    });
  }

  /* ------------------------------------------------------------
     Pagination — flow each chapter's prose across as many pages
     as the page can elegantly hold, never scrolling.
  ------------------------------------------------------------ */
  function buildPages() {
    pages = [];
    pages.push({ type: "cover" });

    // size the measurer exactly like the live content area
    measurer.style.width = pageEl.clientWidth + "px";
    measurer.style.height = pageEl.clientHeight + "px";
    const limit = pageEl.clientHeight;

    CHAPTERS.forEach(function (ch, ci) {
      pages.push({ type: "title", ch: ch, ci: ci });

      measurer.className = "sb-measurer sb-page sb-page--content";
      measurer.innerHTML = "";
      let cur = [];

      ch.lines.forEach(function (line) {
        const p = document.createElement("p");
        p.className = "sb-line";
        p.textContent = line;
        measurer.appendChild(p);
        if (measurer.scrollHeight > limit && cur.length) {
          measurer.removeChild(p);
          pages.push({ type: "content", ch: ch, ci: ci, lines: cur.slice() });
          measurer.innerHTML = "";
          measurer.appendChild(p);
          cur = [line];
        } else {
          cur.push(line);
        }
      });
      if (cur.length) pages.push({ type: "content", ch: ch, ci: ci, lines: cur.slice() });
    });

    pages.push({ type: "closing" });
  }

  function repaginate() {
    const here = pages[index] || {};
    const anchorCi = here.ci;
    const anchorType = here.type;
    buildPages();
    // try to return to the same chapter / type after reflow
    let target = 0;
    if (anchorType === "cover") target = 0;
    else if (anchorType === "closing") target = pages.length - 1;
    else {
      target = pages.findIndex(function (p) { return p.ci === anchorCi; });
      if (target < 0) target = 0;
    }
    index = target;
    renderPage(index, 0);
  }

  /* ------------------------------------------------------------
     Rendering
  ------------------------------------------------------------ */
  function renderPage(i, stagger) {
    const page = pages[i];
    pageEl.className = "sb-page";
    let html = "";

    if (page.type === "cover") {
      pageEl.classList.add("sb-page--cover");
      html =
        '<div class="sb-cover">' +
          '<span class="sb-cover-stamp">📮</span>' +
          '<p class="sb-cover-kicker">a memory book</p>' +
          '<h2 class="sb-cover-title">For Papa</h2>' +
          '<div class="sb-cover-seal">A</div>' +
          '<p class="sb-cover-by">written, in secret, by Anjalee</p>' +
          '<p class="sb-cover-hint">turn the page →</p>' +
        '</div>';
      setTheme("love");
    } else if (page.type === "title") {
      pageEl.classList.add("sb-page--title");
      html =
        '<div class="sb-title">' +
          '<span class="sb-chap-emoji">' + page.ch.emoji + '</span>' +
          '<p class="sb-chap-num">Chapter ' + (ROMAN[page.ci] || (page.ci + 1)) + '</p>' +
          '<h2 class="sb-chap-title">' + page.ch.title + '</h2>' +
          '<span class="sb-rule"></span>' +
          '<p class="sb-chap-sub">' + page.ch.subtitle + '</p>' +
        '</div>';
      setTheme(page.ch.theme);
      setHidden(page.ch.hidden);
    } else if (page.type === "content") {
      pageEl.classList.add("sb-page--content");
      html = page.lines.map(function (line, idx) {
        return '<p class="sb-line" style="animation-delay:' +
          (stagger ? (120 + idx * 220) : 0) + 'ms">' + escapeHtml(line) + '</p>';
      }).join("");
      html += '<span class="sb-folio">' + page.ch.emoji + '</span>';
      setTheme(page.ch.theme);
    } else if (page.type === "closing") {
      pageEl.classList.add("sb-page--closing");
      html =
        '<div class="sb-closing">' +
          '<p class="sb-closing-line">I love you.</p>' +
          '<p class="sb-closing-line sb-closing-em">Always.</p>' +
          '<p class="sb-closing-sign">Your daughter,</p>' +
          '<p class="sb-closing-name">Anjalee</p>' +
          '<div class="sb-cover-seal sb-closing-seal">❤</div>' +
          '<button class="sb-finish" type="button">close the book</button>' +
        '</div>';
      setTheme("yes");
      setHidden([]);
    }

    pageEl.innerHTML = html;

    if (page.type === "closing") {
      pageEl.querySelector(".sb-finish").addEventListener("click", close);
    }

    updateChrome(page);
  }

  function updateChrome(page) {
    const total = CHAPTERS.length;
    if (page.type === "cover") {
      progressEl.textContent = "✦ open when you're ready ✦";
    } else if (page.type === "closing") {
      progressEl.textContent = "✦ the end ✦";
    } else {
      progressEl.textContent = "Chapter " + (page.ci + 1) + " of " + total +
        "  ·  " + page.ch.title;
    }
    prevBtn.style.visibility = index <= 0 ? "hidden" : "visible";
    nextBtn.style.visibility = index >= pages.length - 1 ? "hidden" : "visible";
    bookmarkEl.style.opacity = (page.type === "title" || page.type === "content") ? "1" : "0";
  }

  /* ------------------------------------------------------------
     Page-turn navigation
  ------------------------------------------------------------ */
  function go(dir) {
    if (turning) return;
    const next = index + dir;
    if (next < 0 || next >= pages.length) return;

    if (prefersReduced) {
      index = next;
      renderPage(index, 0);
      return;
    }

    turning = true;
    const forward = dir > 0;
    pageEl.style.transformOrigin = forward ? "left center" : "right center";

    const outKf = forward
      ? [{ transform: "rotateY(0deg)" }, { transform: "rotateY(-88deg)" }]
      : [{ transform: "rotateY(0deg)" }, { transform: "rotateY(88deg)" }];
    const inKf = forward
      ? [{ transform: "rotateY(88deg)" }, { transform: "rotateY(0deg)" }]
      : [{ transform: "rotateY(-88deg)" }, { transform: "rotateY(0deg)" }];

    pageEl.classList.add("is-turning");
    const a = pageEl.animate(outKf, { duration: 320, easing: "cubic-bezier(.4,0,.85,.5)" });
    a.onfinish = function () {
      index = next;
      renderPage(index, 1);
      const b = pageEl.animate(inKf, { duration: 340, easing: "cubic-bezier(.15,.5,.3,1)" });
      b.onfinish = function () {
        pageEl.classList.remove("is-turning");
        turning = false;
      };
    };
  }

  /* ------------------------------------------------------------
     Themed floaties, hidden details, petals, parallax
  ------------------------------------------------------------ */
  function setTheme(theme) {
    if (root.dataset.theme === theme) return;
    root.dataset.theme = theme;

    const set = BASE_FLOATIES.concat(THEME_FLOATIES[theme] || []);
    floatiesEl.innerHTML = "";
    const n = window.innerWidth < 720 ? 9 : 15;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "sb-floaty";
      s.textContent = set[i % set.length];
      const depth = (0.5 + Math.random() * 1.3).toFixed(2);
      s.dataset.depth = depth;
      s.style.top = Math.random() * 92 + "%";
      s.style.left = Math.random() * 94 + "%";
      s.style.fontSize = (1.2 + Math.random() * 1.4).toFixed(2) + "rem";
      s.style.animationDuration = (13 + Math.random() * 12).toFixed(1) + "s";
      s.style.animationDelay = (-Math.random() * 12).toFixed(1) + "s";
      floatiesEl.appendChild(s);
    }
  }

  function setHidden(items) {
    hiddenEl.innerHTML = "";
    if (!items || !items.length) return;
    const spots = [
      { top: "16%", left: "10%" },
      { top: "74%", left: "13%" },
      { top: "22%", left: "87%" },
      { top: "70%", left: "85%" }
    ];
    items.forEach(function (it, i) {
      const d = document.createElement("span");
      d.className = "sb-doodle";
      d.textContent = it.icon;
      d.style.top = spots[i % spots.length].top;
      d.style.left = spots[i % spots.length].left;
      d.addEventListener("mouseenter", function () {
        whisperEl.textContent = it.note;
        const r = d.getBoundingClientRect();
        whisperEl.style.left = (r.left + r.width / 2) + "px";
        whisperEl.style.top = r.top + "px";
        whisperEl.classList.add("show");
      });
      d.addEventListener("mouseleave", function () {
        whisperEl.classList.remove("show");
      });
      hiddenEl.appendChild(d);
    });
  }

  function spawnPetal() {
    if (prefersReduced || root.getAttribute("aria-hidden") === "true") return;
    const glyphs = ["🌸", "🌼", "✿", "❀", "🍂"];
    const p = document.createElement("span");
    p.className = "sb-petal";
    p.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = (0.8 + Math.random() * 1.1).toFixed(2) + "rem";
    const dur = 10 + Math.random() * 9;
    p.style.animationDuration = dur + "s";
    p.style.opacity = (0.4 + Math.random() * 0.4).toFixed(2);
    petalsEl.appendChild(p);
    setTimeout(function () { p.remove(); }, dur * 1000 + 400);
  }

  // gentle pointer parallax on the floaties
  let px = 0, py = 0;
  function parallax(e) {
    if (root.getAttribute("aria-hidden") === "true") return;
    px = (e.clientX / window.innerWidth - 0.5) * 2;
    py = (e.clientY / window.innerHeight - 0.5) * 2;
    [].forEach.call(floatiesEl.children, function (el) {
      const depth = parseFloat(el.dataset.depth) || 1;
      el.style.translate = (-px * 16 * depth).toFixed(1) + "px " +
                           (-py * 12 * depth).toFixed(1) + "px";
    });
    [].forEach.call(photosEl.children, function (el) {
      const depth = parseFloat(el.dataset.depth) || 0.4;
      el.style.translate = (-px * 14 * depth).toFixed(1) + "px " +
                           (-py * 10 * depth).toFixed(1) + "px";
    });
  }

  /* ------------------------------------------------------------
     Open / close
  ------------------------------------------------------------ */
  function open() {
    if (!built) build();
    root.setAttribute("aria-hidden", "false");
    document.body.classList.add("sb-locked");

    // wait for the overlay to lay out, then paginate against real sizes
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        buildPages();
        index = 0;
        renderPage(0, 1);
        root.classList.add("is-open");
      });
    });

    if (!prefersReduced) {
      if (petalTimer) clearInterval(petalTimer);
      petalTimer = setInterval(spawnPetal, 2400);
      window.addEventListener("mousemove", parallax);
    }
  }

  function close() {
    root.classList.remove("is-open");
    document.body.classList.remove("sb-locked");
    if (petalTimer) { clearInterval(petalTimer); petalTimer = null; }
    window.removeEventListener("mousemove", parallax);
    setTimeout(function () {
      root.setAttribute("aria-hidden", "true");
      whisperEl.classList.remove("show");
    }, 520);
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // expose
  window.Storybook = { open: open, close: close };
})();
