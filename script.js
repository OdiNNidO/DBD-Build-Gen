const survivors = [
    { name: "Dwight Fairfield", strength: "Teamwork" },
    { name: "Meg Thomas", strength: "Speed" },
    { name: "Claudette Morel", strength: "Healing" },
    { name: "Jake Park", strength: "Stealth" },
    { name: "Nea Karlsson", strength: "Urban Evasion" },
    { name: "Laurie Strode", strength: "Survival" },
    { name: "Ace Visconti", strength: "Luck" },
    { name: "Bill Overbeck", strength: "Endurance" },
    { name: "Feng Min", strength: "Technology" },
    { name: "David King", strength: "Aggression" },
    { name: "Kate Denson", strength: "Distraction" },
    { name: "Adam Francis", strength: "Teaching" },
    { name: "Jeff Johansen", strength: "Altruism" },
    { name: "Jane Romero", strength: "Leadership" },
    { name: "Ash Williams", strength: "Self-Sufficiency" },
    { name: "Nancy Wheeler", strength: "Detection" },
    { name: "Steve Harrington", strength: "Teamwork" },
    { name: "Yui Kimura", strength: "Bravery" },
    { name: "Zarina Kassir", strength: "Information" },
    { name: "Cheryl Mason", strength: "Resilience" },
    { name: "Felix Richter", strength: "Planning" },
    { name: "Elodie Rakoto", strength: "Deception" },
    { name: "Yun-Jin Lee", strength: "Selfishness" },
    { name: "Jill Valentine", strength: "Resourcefulness" },
    { name: "Leon S. Kennedy", strength: "Adaptability" },
    { name: "Mikaela Reid", strength: "Boon Totems" },
    { name: "Jonah Vasquez", strength: "Analysis" },
    { name: "Yoichi Asakawa", strength: "Parapsychology" },
    { name: "Haddie Kaur", strength: "Dimensional Awareness" },
    { name: "Ada Wong", strength: "Espionage" },
    { name: "Rebecca Chambers", strength: "Support" },
    { name: "Vittorio Toscano", strength: "Knowledge" },
    { name: "Thalita Lyra", strength: "Manipulation" },
    { name: "Renato Lyra", strength: "Protection" },
    { name: "Gabriel Soma", strength: "Intuition" },
    { name: "Nicolas Cage", strength: "Versatility" }
];

const killers = [
    { name: "Trapper", strength: "Area Control" },
    { name: "Wraith", strength: "Stealth" },
    { name: "Hillbilly", strength: "Mobility" },
    { name: "Nurse", strength: "Map Pressure" },
    { name: "Shape (Michael Myers)", strength: "Stalking" },
    { name: "Hag", strength: "Map Control" },
    { name: "Doctor", strength: "Tracking" },
    { name: "Huntress", strength: "Ranged Attack" },
    { name: "Cannibal", strength: "Insta-down" },
    { name: "Nightmare", strength: "Sleep Mechanics" },
    { name: "Pig", strength: "Stealth and Slowdown" },
    { name: "Clown", strength: "Area Denial" },
    { name: "Spirit", strength: "Mind Games" },
    { name: "Legion", strength: "Frenzy" },
    { name: "Plague", strength: "Infection" },
    { name: "Ghost Face", strength: "Stealth and Stalking" },
    { name: "Demogorgon", strength: "Map Mobility" },
    { name: "Oni", strength: "Snowball Potential" },
    { name: "Deathslinger", strength: "Ranged Attack" },
    { name: "Executioner", strength: "Punishment of the Damned" },
    { name: "Blight", strength: "High Mobility" },
    { name: "Twins", strength: "Map Pressure" },
    { name: "Trickster", strength: "Ranged Attacks" },
    { name: "Nemesis", strength: "Contamination and AI Assistance" },
    { name: "Cenobite", strength: "Chain Hunt and Item Denial" },
    { name: "Artist", strength: "Information and Pressure" },
    { name: "Onryō", strength: "Stealth and Teleportation" },
    { name: "Dredge", strength: "Darkness and Teleportation" },
    { name: "Mastermind", strength: "Area Control and Tracking" },
    { name: "Knight", strength: "Map Pressure and Chase Potential" },
    { name: "Skull Merchant", strength: "Information and Lockdown" },
    { name: "Singularity", strength: "Transformation and Adaptation" }
];

const survivorPerks = [
    { name: "Dead Hard", description: "Dash forward to avoid damage." },
    { name: "Borrowed Time", description: "Protect recently unhooked survivors." },
    { name: "Decisive Strike", description: "Stun the killer when picked up." },
    { name: "Unbreakable", description: "Recover from the dying state once per trial." },
    { name: "Sprint Burst", description: "Run at increased speed at the start of a sprint." },
    { name: "Adrenaline", description: "Instantly heal and sprint when the exit gates are powered." },
    { name: "Iron Will", description: "Reduce grunts of pain." },
    { name: "Spine Chill", description: "Get notified when the killer is looking in your direction." },
    { name: "Kindred", description: "See the auras of other survivors when someone is hooked." },
    { name: "We'll Make It", description: "Increased healing speed after unhooking a survivor." },
    { name: "Resilience", description: "Increased action speed when injured." },
    { name: "Prove Thyself", description: "Increased generator repair speed when working with others." },
    { name: "Lithe", description: "Sprint after vaulting." },
    { name: "Balanced Landing", description: "Reduce stagger duration and sprint after falling." },
    { name: "Urban Evasion", description: "Move faster while crouching." },
    { name: "Quick & Quiet", description: "Perform rush actions silently." },
    { name: "Self-Care", description: "Heal yourself without a med-kit." },
    { name: "Empathy", description: "See the auras of injured survivors." },
    { name: "Botany Knowledge", description: "Increased healing speed." },
    { name: "Saboteur", description: "Sabotage hooks without a toolbox." }
];

const killerPerks = [
    { name: "Barbecue & Chili", description: "See survivors' auras after hooking someone." },
    { name: "Corrupt Intervention", description: "Block the three furthest generators at the start of the trial." },
    { name: "Pop Goes the Weasel", description: "After hooking a survivor, the next generator you damage instantly loses 25% progress." },
    { name: "Hex: Ruin", description: "All generators automatically regress when not being repaired." },
    { name: "Hex: Devour Hope", description: "Gain tokens for hooks far from you, eventually allowing you to Mori survivors." },
    { name: "Hex: No One Escapes Death", description: "When all generators are completed, gain increased movement speed and the ability to down survivors in one hit." },
    { name: "Sloppy Butcher", description: "Wounds caused by basic attacks tremendously increase bleeding and healing time." },
    { name: "Nurse's Calling", description: "See the auras of survivors who are healing or being healed." },
    { name: "Whispers", description: "Hear the Entity's whisper when survivors are nearby." },
    { name: "Monitor & Abuse", description: "Increased field of view and reduced terror radius when not in a chase." },
    { name: "Tinkerer", description: "Receive a notification and have no terror radius when a generator is almost complete." },
    { name: "Discordance", description: "Generators being repaired by two or more survivors are highlighted." },
    { name: "Save the Best for Last", description: "Gain tokens to decrease successful attack cooldown when hitting non-obsession survivors." },
    { name: "Hex: Haunted Ground", description: "When a hex totem is cleansed, all survivors suffer from the Exposed status effect." },
    { name: "Infectious Fright", description: "Survivors within your terror radius scream and reveal their location when another survivor is downed." },
    { name: "Thrilling Tremors", description: "After picking up a survivor, all unoccupied generators are blocked." },
    { name: "Surge", description: "Downing a survivor with a basic attack causes nearby generators to instantly regress." },
    { name: "Cruel Limits", description: "When a generator is completed, nearby windows and vaults are blocked for all survivors." },
    { name: "Mindbreaker", description: "Survivors repairing generators suffer from the Exhausted status effect." },
    { name: "Hex: Undying", description: "When a Hex totem is cleansed, it moves to a dull totem instead of being destroyed." }
];

function generateBuild(characters, perks) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const build = [];
    const perksCopy = [...perks];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * perksCopy.length);
        build.push(perksCopy[randomIndex]);
        perksCopy.splice(randomIndex, 1);
    }
    return { character, build };
}

function generateExplanation(character, build, isKiller) {
    const roleType = isKiller ? "Killer" : "Survivor";
    let explanation = `We've selected ${character.name} as the ${roleType} for this build. ${character.name}'s strength in ${character.strength} synergizes well with the chosen perks. `;

    explanation += "Here's how these perks work together:\n\n";

    build.forEach(perk => {
        explanation += `- ${perk.name}: ${perk.description} This perk complements ${character.name}'s ${character.strength} by `;
        // Add more specific explanations here based on the character and perk combination
        explanation += "providing additional strategic options.\n\n";
    });

    return explanation;
}

function generateGameplayTips(character, build, isKiller) {
    const roleType = isKiller ? "Killer" : "Survivor";
    let tips = `Playing as ${character.name} with this build:\n\n`;

    tips += `1. Leverage ${character.name}'s ${character.strength}: `;
    // Add specific tips based on the character's strength

    build.forEach((perk, index) => {
        tips += `${index + 2}. Utilizing ${perk.name}: `;
        // Add specific tips for each perk
    });

    tips += `\n6. Overall strategy: Combine ${character.name}'s ${character.strength} with your perks to `;
    // Add overall strategy tips

    return tips;
}

function displayBuild(result, type) {
    const buildResult = document.getElementById('build-result');
    const isKiller = type === 'Killer';
    const explanation = generateExplanation(result.character, result.build, isKiller);
    const gameplayTips = generateGameplayTips(result.character, result.build, isKiller);

    buildResult.innerHTML = `
        <div class="character-info">
            <div class="character-icon">${result.character.name.charAt(0)}</div>
            <div>
                <h3>${type} Build for ${result.character.name}</h3>
                <p><strong>Character Strength:</strong> ${result.character.strength}</p>
            </div>
        </div>
        <h4>Perks:</h4>
        <ul>
            ${result.build.map(perk => `
                <li>
                    <div class="perk-icon"></div>
                    <strong>${perk.name}:</strong> ${perk.description}
                </li>
            `).join('')}
        </ul>
        <h4>Build Explanation:</h4>
        <p>${explanation}</p>
        <h4>Gameplay Tips:</h4>
        <p>${gameplayTips}</p>
    `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const survivorBtn = document.getElementById('survivor-btn');
    const killerBtn = document.getElementById('killer-btn');

    survivorBtn.addEventListener('click', () => {
        const build = generateBuild(survivors, survivorPerks);
        displayBuild(build, 'Survivor');
    });

    killerBtn.addEventListener('click', () => {
        const build = generateBuild(killers, killerPerks);
        displayBuild(build, 'Killer');
    });
});