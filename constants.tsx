import React from 'react';
import { Scenario } from './types';

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const SuperheroIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const PaparazziIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MediterraneanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const CosmicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const FashionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V4h8v7" />
    </svg>
);

const GoldenHourIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h2m16 0h2M12 2v2m0 16v2m6.364-15.364l-1.414 1.414M6.05 19.95l-1.414-1.414m11.314 0l-1.414-1.414M6.05 8.05L4.636 6.636" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);

const WatchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RetroIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EmbraceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2z" />
    </svg>
);

const BWIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"/>
    </svg>
);

const WineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 14l-4-4m0 0l-4 4m4-4v12" />
    </svg>
);

const AdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ForestPathIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const CreativeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const TurtleneckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m-7.072 0a5 5 0 010-7.072m7.072 7.072l-7.072-7.072" />
    </svg>
);

const PolaroidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16h16" />
    </svg>
);


export const scenarios: Scenario[] = [
  {
    id: 'hug',
    title: 'Couple Hug',
    description: 'Upload two photos of people, and the AI will create a new image of them hugging.',
    requiredImages: 2,
    prompt: `Create a single, new, photorealistic image where the two people from the provided images appear to be hugging each other warmly and lovingly. Blend their features and the style of the photos seamlessly into a cohesive, romantic scene. The background should be soft and slightly out of focus.`,
    icon: <HeartIcon />,
  },
    {
    id: 'superhero',
    title: 'Superhero Team-Up',
    description: 'Turn two people into superheroes standing side-by-side, ready for action.',
    requiredImages: 2,
    prompt: 'Create a single, new, dynamic comic-book style image. The two people from the provided photos are now superheroes standing back-to-back, ready for battle. Give them unique, complementary costumes. The background should be a dramatic, stylized cityscape at night.',
    icon: <SuperheroIcon />,
  },
  {
    id: 'celebrity',
    title: 'Celebrity Madness',
    description: 'Become a celebrity swarmed by fans and paparazzi in a dynamic, high-energy shot.',
    requiredImages: 1,
    prompt: `Wide-angle GoPro-style shot from a high, symmetrical bird's-eye perspective. The person from the photo stands in black sunglasses and a sleek black suit, looking casually into the camera while holding their face with their index finger and thumb in a confident gesture. Around them, glamorous supermodels and enthusiastic fans reach out, touching their arms and shoulders, enhancing their magnetic presence. Below the frame, paparazzi flashes and crowded journalists with cameras create a chaotic yet dramatic atmosphere. The ultra-wide GoPro lens exaggerates perspective, making the scene feel immersive, dynamic, and larger-than-life like a raw, energetic capture from the middle of celebrity madness.`,
    icon: <PaparazziIcon />,
  },
  {
    id: 'mediterranean',
    title: 'Mediterranean Summer',
    description: 'Place yourself in a timeless, elegant Mediterranean scene with a cinematic vintage feel.',
    requiredImages: 1,
    prompt: `A person leaning against an old stone wall in warm golden sunlight, wearing a beige linen shirt with rolled-up sleeves, olive green pleated trousers, and a brown leather belt. Cinematic vintage aesthetic, Mediterranean summer atmosphere, soft shadows, timeless and elegant style.`,
    icon: <MediterraneanIcon />,
  },
  {
    id: 'mahabharata',
    title: 'Mahabharata Epic',
    description: 'Witness the epic Mahabharata battle unfold as Lord Krishna reveals his cosmic form.',
    requiredImages: 1,
    prompt: `The person from the photo, appearing as a young man of 22, is sitting on a couch, holding an open book with golden edges. An epic Mahabharata battle unfolds in front of him. Lord Krishna, radiant and divine, is standing beside Arjuna, revealing his awe-inspiring Vishwa Roopam an infinite cosmic form with countless faces, arms, and divine symbols radiating golden, blue, and white light in all directions. Ensure 100% face matching of the person from the given image.`,
    icon: <CosmicIcon />,
  },
  {
    id: 'fashion-editorial',
    title: 'Futuristic Fashion',
    description: 'Star in a futuristic fashion editorial with a muted lemon-green theme and soft cinematic lighting.',
    requiredImages: 1,
    prompt: `male model (same face & hairstyle as uploaded photo, do not change facial expression). wearing outfit: oversized white sweatshirt, lemon green oversized combat jean, styled with footwear: lemon green neutral or nike sneakers and white ribbed socks. Environment: muted lemon green-toned studio background. Lighting: soft cinematic glow highlighting skin and fabric textures. Style: fashion editorial x futuristic. Composition: model seated elegantly with relaxed posture.`,
    icon: <FashionIcon />,
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour Portrait',
    description: 'A calm, dreamy, and natural portrait with warm sunlight streaming through a window.',
    requiredImages: 1,
    prompt: `Create a softly lit portrait of the uploaded person standing indoors near a window with warm sunlight streaming through. Use a cinematic, golden-hour lighting style that highlights the face and hair with natural glow and soft shadows. The person should be wearing a loose, casual white shirt with slightly rolled-up sleeves. The mood should feel calm, dreamy, and natural, with soft depth of field and a warm, intimate atmosphere.`,
    icon: <GoldenHourIcon />,
  },
  {
    id: 'refined-confidence',
    title: 'Refined Confidence',
    description: 'A classic, confident pose adjusting a wristwatch, with dramatic lighting.',
    requiredImages: 1,
    prompt: `photo of the person from the image (preserving their exact original face and features) standing by a wall, one hand adjusting their wristwatch, the other tucked into their trouser pocket. The light source creates angular shadows on their chiseled face and suit, emphasizing the tailoring. Their Gaze is downward, evoking calm confidence and refined masculinity.`,
    icon: <WatchIcon />,
  },
  {
    id: 'retro-icon',
    title: '70s Retro Icon',
    description: 'Become a 1970s retro icon in a vintage lounge with a classic Bollywood jazz club vibe.',
    requiredImages: 1,
    prompt: `Create a hyper-realistic portrait of the uploaded person (preserve face 100%) styled as a 1970s retro icon. He is seated casually in a dimly lit lounge with vintage vinyl records stacked behind him, a glowing jukebox casting warm neon light across the scene. Outfit: open-collared patterned silk shirt, flared trousers, gold chain, and tinted aviator sunglasses. The lighting is warm amber with subtle film grain, evoking the ambience of old Bollywood jazz clubs. Pose is relaxed, with one arm resting on a velvet sofa and a confident half-smile.`,
    icon: <RetroIcon />,
  },
  {
    id: 'divine-embrace',
    title: 'Divine Embrace',
    description: 'A cinematic scene where you are embraced by Lord Krishna in a tranquil forest.',
    requiredImages: 1,
    prompt: `Create a cinematic emotional frame featuring the person from the photo together with Lord Krishna. The person's head is resting on Lord Krishna's shoulder. And he is looking at the person and touching their head. The setting is a tranquil, natural forest environment at dusk, with ancient trees and soft golden evening light filtering through the foliage. Both subjects are seated by a large, old tree trunk.`,
    icon: <EmbraceIcon />,
  },
  {
    id: 'classic-bw',
    title: 'Classic B&W Portrait',
    description: 'A timeless black and white photo with dramatic, angular shadows, evoking calm confidence.',
    requiredImages: 1,
    prompt: `Black and white photo of the person from the image (preserving their exact original face and features) standing by a wall, one hand adjusting their wristwatch, the other tucked into their trouser pocket. The light source creates angular shadows on their chiseled face and suit, emphasizing the tailoring. Their Gaze is downward, evoking calm confidence and refined masculinity.`,
    icon: <BWIcon />,
  },
  {
    id: 'retro-wine',
    title: 'Retro Wine Aesthetic',
    description: 'A stylish, retro-aesthetic portrait against a deep wine-colored wall with dramatic shadows.',
    requiredImages: 1,
    prompt: `Use face image (100% same). A full-body, camera look-angle portrait of a man. He is sitting on the ground in a stylish pose against a solid deep wine-colored wall, with deep shadows in a windy environment. He is wearing a perfect red wine-colored, retro aesthetic shirt with matching pants and white sneakers. He has a silver watch.`,
    icon: <WineIcon />,
  },
  {
    id: 'ad-campaign',
    title: 'Modern Ad Campaign',
    description: 'Star in a modern, vibrant advertisement with a clean, professional look.',
    requiredImages: 1,
    prompt: `A striking, modern advertisement featuring a handsome male (face 100% match from uploaded photo), with short, stylish hair and glasses, sitting comfortably in a vibrant blue, plush, rounded armchair. He is dressed in a contemporary, athletic-inspired outfit: bright blue pants and a matching blue and yellow patterned long-sleeved top. His sneakers are a light neutral color, and he wears white socks. He is looking directly at the viewer with a friendly, confident smile. The background is a clean, gradient blue, with a large, stylized white letter "T" subtly placed behind him. There are also faint, placeholder text elements in the top left and top right corners of the image, characteristic of a magazine or product advertisement.`,
    icon: <AdIcon />,
  },
  {
    id: 'forest-path',
    title: 'Cinematic Forest Path',
    description: 'An intense, editorial-style photo on a narrow, dimly lit forest path.',
    requiredImages: 1,
    prompt: `use face image. Create a hyper-realistic photo set in a narrow, dimly lit forest path. At the center, a young man in his early 20s in a hoodie stands facing the camera with a neutral yet intense expression. He's wearing a black hoodie. The lighting is cold, coming from the left, half body behind foreground blurred bushes, enhancing the claustrophobic, cinematic feel. The entire environment should be sharply in focus no background blur. Think editorial Vogue aesthetic. --ar 9:16`,
    icon: <ForestPathIcon />,
  },
  {
    id: 'creative-intensity',
    title: 'Creative Intensity',
    description: 'A dramatic black and white shot capturing a moment of intense creative thought.',
    requiredImages: 1,
    prompt: `Fine black and white photography of a handsome young man (from the uploaded image) with dark hair, his head tilted back in a moment of intense creative thought or ecstasy. His hands are open. He is wearing a loose white collared shirt, standing in a dimly lit study filled with stacks of books and papers floating all over. The image is captured with a slow shutter speed, creating dramatic horizontal motion blur that streaks the background and the edges of his form, and is super realistic.`,
    icon: <CreativeIcon />,
  },
  {
    id: 'cinematic-turtleneck',
    title: 'Cinematic Turtleneck',
    description: 'A dramatic, high-contrast portrait featuring a dark turtleneck and an intense gaze.',
    requiredImages: 1,
    prompt: `A person (from the uploaded image) is standing in a three-quarter pose, their body slightly turned to the left while their head faces forward, looking directly at the camera with a confident, intense gaze. Their lips are pressed together, and their jawline is sharp under the light. Their right shoulder is closer to the camera, and their arms remain relaxed at their sides, not visible in detail. They are wearing a thick, dark knit sweater with a tall, turned-up turtleneck collar that frames their face. The fabric is textured with chunky ribbing. The overall look is minimalist, without accessories. The scene is dramatically lit with a strong beam of warm light cutting diagonally across the face and upper body, creating high contrast between illuminated areas and deep shadows. The background is dark, matte, and softly textured, with a reddish tone that enhances the cinematic atmosphere. The camera angle is eye-level, capturing from the chest up in a portrait style.`,
    icon: <TurtleneckIcon />,
  },
  {
    id: 'polaroid-hug',
    title: 'Polaroid Hug',
    description: 'Create a vintage Polaroid-style photo of two people hugging.',
    requiredImages: 2,
    prompt: `Create a photo that looks like it was taken with a Polaroid camera. The photo should have a slight blur and a consistent light source, like a flash from a dark room, scattered throughout. The background should be white curtains. The photo should feature the two people from the reference pictures hugging each other. Do not change their faces.`,
    icon: <PolaroidIcon />,
  }
];
