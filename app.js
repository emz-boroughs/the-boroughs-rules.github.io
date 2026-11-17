"use strict";

const civilianRules = [
  ["C01","Start in character","Roleplay is the default in the city. Keep OOC questions, bug reports and rule disputes for the approved support channel after the scene, unless an immediate safety issue requires staff."],
  ["C02","Voice and communication","Use clear voice communication for scenes where it is needed. This is an English-speaking roleplay community; do not use text-only chat to force other players through scenes they cannot reasonably answer."],
  ["C03","Respect out of character","Harassment, discriminatory abuse, real-life threats and targeted OOC toxicity are not acceptable. Keep character conflict in character and report serious issues with context."],
  ["C04","Fair play and common sense","Do not exploit bugs, third-party cheats, modified hitboxes, speed boosts, crosshairs or abnormal movement. If a mechanic gives an unfair advantage, do not use it; report it after the scene."],
  ["C05","RDM and VDM","Do not injure, kill or damage another player or their property without a valid, developed in-character reason. A vehicle is not a weapon for running people down."],
  ["C06","Initiation needs context","Before starting hostile civilian RP, establish a clear reason and give the other character a fair chance to understand and respond. A random demand or single insult is not enough on its own."],
  ["C07","Value life","React credibly to an immediate, credible threat. Do not act as though your character is immune to serious consequences, and do not use a weapon being present as an excuse to force an outcome."],
  ["C08","Metagaming","Only act on information your character learned in the city. Do not use streams, clips, Discord calls, OOC chats, feeds or another character's knowledge to locate or help someone."],
  ["C09","No forced outcomes","Do not use /me, /do or game mechanics to decide another character's actions, injuries, possessions or consent. Describe what your character attempts and allow a reasonable response."],
  ["C10","Protected public places","Hospitals, police and emergency-service facilities, shops, garages, public transport hubs, religious venues and advertised community events are protected. Do not initiate violence there or drag someone out to start it."],
  ["C11","Keep public scenes playable","Do not use busy public areas to bait, crowd or repeatedly provoke other players. If a scene becomes unsafe or unusable, disengage and raise it afterwards."],
  ["C12","Hostages must be genuine","A hostage must be an unwilling participant with a real chance to roleplay. Do not use an in-character friend or faction member as a willing hostage, or give the hostage a cut to make them part of the crime."],
  ["C13","Group limits","A hostile scene may involve up to six people in total unless a specific activity publishes a lower cap. Do not third-party or join just because you recognise someone; establish a valid in-character reason first."],
  ["C14","Activity limits","Use the posted event cap: regular shop robbery up to 3, bank up to 4, jewellery robbery up to 5 and GPS hack up to 6. Count everyone participating in the scene, not only the people carrying items."],
  ["C15","Downed and recovery scenes","Do not respawn while an active scene, treatment or transport is underway. Follow the server's downed-state and New Life Rule mechanics; do not use respawn to avoid consequences."],
  ["C16","Injuries continue after combat","Roleplay the consequences of serious injuries and seek appropriate in-city treatment. Do not immediately return to the same conflict as if nothing happened."],
  ["C17","Leave a finished scene alone","After respawning or leaving an active scene, do not return to collect evidence, loot bodies or restart the same conflict. Let emergency services and the scene participants finish their roleplay."],
  ["C18","No combat logging","Do not disconnect, close the game or hide in a menu to escape an active scene. If a genuine crash or connection loss happens, return promptly and continue where practical; tell staff if you cannot."],
  ["C19","Drive for the setting","Drive in a way that fits the vehicle and conditions. Do not take implausible jumps, drive up stairways, use deliberate collisions as a weapon or exploit garages during a pursuit."],
  ["C20","Police and emergency services","Police scenes are roleplay, not a target practice loop. Follow server policy, respond credibly and do not steal restricted police equipment. Attacks on police are prohibited under Boroughs civilian rules."],
  ["C21","Looting and property","Take only items that the scene and server mechanics allow. Do not strip a downed character of everything, force an inventory transfer or hide keys and evidence to make recovery impossible."],
  ["C22","Storage during a scene","Do not stash items, store or swap vehicles, use house teleporting or exploit inventory menus to defeat an active pursuit or confrontation."],
  ["C23","Restart window","Do not start new crime in the 30 minutes before a scheduled restart. Faction attacks also have their own 15-minute restriction on either side of restart; the longer applicable restriction takes priority."],
  ["C24","Voice changers and identity","Use a voice effect only as a consistent character trait or for a justified in-character anonymous call. Do not use it to evade identification after being recognised."],
  ["C25","Keep conflict in character","Do not insult real people, deceased relatives or another player's identity to win a scene. Character rivalry must remain within server conduct rules."],
  ["C26","Whitelisted-role integrity","Do not use a trusted or whitelisted role for corruption unless the story has been approved by staff in advance."]
];

const factionRules = [
  ["F01","Faction membership","Only current members of the registered faction may take part in its attacks. Civilians and unaffiliated characters keep their own story and cannot act as extra faction numbers."],
  ["F02","Build meaningful history","A faction attack requires at least three separate, meaningful negative in-character interactions between the sides. Arguments alone do not count; log the context before escalation."],
  ["F03","Escalate proportionately","Conflict should grow from believable events and give both sides room to respond. Do not turn a minor slight, one robbery or a one-line excuse into a planned shootout."],
  ["F04","Attack group cap","A standard faction attack is limited to four attackers. Only the published set-turf defence exception can change that count; confirm the exception in the current faction guidance before acting."],
  ["F05","Mutual combat cap","A declared large-faction brawl may include up to eight people per faction, including allies. Do not add extra people after the scene begins."],
  ["F06","No solo group attacks","Do not send one character to attack a group. Individual disputes may stay one-to-one only when the other person is alone and the history supports it."],
  ["F07","Attack cooldowns","After an attack on a faction's set turf, wait 72 hours before attacking that same turf and 24 hours before attacking a different faction turf. Any tier exception must be explicitly listed by Faction Management; active cooldowns cannot be overridden by provocation."],
  ["F08","Restart restrictions","Faction attacks are not allowed during the first or last 15 minutes around a server restart. An invitation or a restart approaching does not erase an existing cooldown."],
  ["F09","Three intentional kills maximum","A faction attack may intentionally down no more than three marked participants. Any accidental excess is reviewed by staff; it does not create a right to continue."],
  ["F10","A turf robbery is an attack","Robbing or assaulting someone on a registered set turf counts as a faction attack and uses the relevant attack cooldown."],
  ["F11","Public events stay protected","Do not bring faction beef, intimidation or attacks to an advertised community event. Move the conflict to a suitable scene after the public event has ended and the parties have a reason to meet."],
  ["F12","No third-party support","Members who are not part of the active scene must not scout, follow or join it. Allies need a clear in-character reason and must fit inside the published cap."],
  ["F13","Turf presence is not consent","Do not camp another faction's turf or repeatedly circle it to provoke a response. A visit needs a credible roleplay purpose and must end when the scene is over."],
  ["F14","Keep to your own story","Civilians may know or live near a faction, but they cannot spend all their time joining that faction's beef. A civilian needs their own roleplay history before helping defend a faction."],
  ["F15","Use the faction representation","When three or more faction members act together in faction business, represent the faction as required by the current server tools and guidance."],
  ["F16","Cooldown after combat","After combat, play your block for at least 30 minutes. After a weapon-related negative interaction, stay away from targeted traffic for the additional cooldown set in the active server guidance."],
  ["F17","No reload advantage","Do not reload or refill during an attack to extend the scene. Defensive refills are only allowed where the current faction rules explicitly permit them."],
  ["F18","No hidden weapon tricks","Do not fake putting away, hiding or producing an item through emotes or menus when your character does not actually have it. /me and /do describe a scene; they do not create inventory."],
  ["F19","Tier caps apply in every scene","The firearm and melee limits selected in the Black Market apply to faction activity. A roll is only a draft; follow live faction guidance on who may carry each item."],
  ["F20","Weapons must be logged","Weapons acquired, traded or lost through faction RP must be recorded using the approved faction process. Keep the clip and any identifiers required by Faction Management."],
  ["F21","No illicit weapon hand-offs","Do not pass faction weapons to civilians or unregistered members unless a specific staff-approved storyline permits it."],
  ["F22","Marks need a valid scene","A mark must follow a serious, active in-character incident such as an attack or credible threat. Do not mark for routine banter or to build a quota."],
  ["F23","CK review is not automatic","A mark count never grants permission by itself. Submit the required chronological evidence and wait for explicit Faction Management approval before a Character Kill."],
  ["F24","Masking and identification","A mask or outfit is not a reason to attack on sight. Use identification only when your character has a credible in-city basis; do not use OOC names or streams to pinpoint people."],
  ["F25","No attacks without history","Backdoor attacks on a faction with no meaningful prior interactions are prohibited. Build the conflict in character and keep a record of the steps leading to it."],
  ["F26","Fight clean","Do not speed boost, use abnormal movement, exploit crosshairs or abuse animation and inventory mechanics in a faction scene. Staff may review clips and apply faction discipline."],
  ["F27","Stay available for the scene","Remain in the server after starting or defending an attack long enough for the roleplay and immediate aftermath to resolve. Do not leave to dodge a report or consequence."],
  ["F28","No OOC retaliation","Do not use local OOC, public posts or private messages to pressure an opposing faction or Faction Management. Use the report process and let the scene develop."],
  ["F29","No disrespect to dead characters","Do not spit on, urinate on, defecate on or otherwise degrade a downed character. Treat serious injury scenes with respect."],
  ["F30","Probation means restricted activity","A faction on probation must follow the restrictions in its notice. Do not equip or use weapons if the probation order prohibits them."],
  ["F31","Record the story, not just the violence","Faction threads should show development, block activity and community roleplay. Keep attack clips in the approved private faction log rather than using them to harass others."]
];

const evidenceRules = [
  ["R01","Report promptly","Submit a faction report within 24 hours of the incident unless staff announces a different window. Include the date, people involved and a short, factual account."],
  ["R02","Keep the full clip","Provide at least two minutes of relevant, unedited footage with audio when requested. Include enough lead-in and aftermath to understand the scene."],
  ["R03","No revenge reports","Do not file a report just because a scene went against you. Reports are for clear rule concerns, not retaliation."],
  ["R04","Pause negative contact","While a report between factions is under review, avoid further negative interactions with that faction unless staff gives a clear exception."],
  ["R05","Use the proper channel","Submit evidence through the official report or faction Discord process. Do not contact staff repeatedly in private messages to influence the outcome."],
  ["R06","Keep evidence authentic","Do not crop out context, alter audio or use another player's stream as if it were your own POV. Staff may request the original recording."],
  ["R07","Log weapon losses","Lost faction weapons and knives are eligible for a replacement only under the current recovery window and evidence process. Test factions may have different eligibility."]
];

const tiers = [
  {tier:"0",guns:0,melee:3,summary:"Three melee items and no firearms."},
  {tier:"0.5",guns:0,melee:4,summary:"Four melee items and no firearms."},
  {tier:"1",guns:1,melee:3,summary:"One firearm and three melee items."},
  {tier:"1.5",guns:1,melee:5,summary:"One firearm and five melee items."},
  {tier:"2",guns:2,melee:3,summary:"Two firearms and three melee items."},
  {tier:"2.5",guns:2,melee:4,summary:"Two firearms and four melee items."},
  {tier:"3",guns:3,melee:3,summary:"Three firearms and three melee items."}
];

const htmlEscape = function (value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char];
  });
};

let weapons = [];
let catalogFilter = "all";
let isSpinning = false;

function setPage(page, writeHash) {
  const requested = ["black-market","roe","civilian","faction-tiers"].includes(page) ? page : "black-market";
  document.querySelectorAll(".page").forEach(function (section) {
    section.hidden = section.dataset.page !== requested;
  });
  document.querySelectorAll(".nav-link").forEach(function (link) {
    if (link.dataset.page === requested) link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  });
  if (writeHash) history.replaceState(null, "", "#" + requested);
  window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
}

function imageFor(item) {
  return htmlEscape(item.image);
}

function renderStats() {
  const firearms = weapons.filter(function (item) { return item.category === "Firearm"; }).length;
  const melee = weapons.length - firearms;
  document.getElementById("stat-total").textContent = String(weapons.length).padStart(2,"0");
  document.getElementById("stat-firearms").textContent = String(firearms).padStart(2,"0");
  document.getElementById("stat-melee").textContent = String(melee).padStart(2,"0");
  document.getElementById("choice-count").textContent = weapons.length + " items";
}

function getTier() {
  return tiers.find(function (tier) { return tier.tier === document.getElementById("loadout-tier").value; }) || tiers[0];
}

function renderTier() {
  const tier = getTier();
  document.getElementById("tier-guns-value").textContent = tier.guns;
  document.getElementById("tier-melee-value").textContent = tier.melee;
  document.getElementById("tier-loadout-note").textContent = "Tier " + tier.tier + " · " + tier.melee + " melee · " + (tier.guns ? tier.guns + " firearm" + (tier.guns === 1 ? "" : "s") : "no firearms");
  document.getElementById("gun-roll-count").textContent = tier.guns + " roll" + (tier.guns === 1 ? "" : "s");
  document.getElementById("melee-roll-count").textContent = tier.melee + " roll" + (tier.melee === 1 ? "" : "s");
  document.getElementById("gun-reel-group").hidden = tier.guns === 0;
  document.getElementById("spin-result").hidden = true;
  if (!isSpinning) renderReadySlots(tier);
}

function renderReadySlots(tier) {
  document.getElementById("gun-draws").innerHTML = Array.from({length:tier.guns}, function () { return '<div class="draw-ready">READY</div>'; }).join("");
  document.getElementById("melee-draws").innerHTML = Array.from({length:tier.melee}, function () { return '<div class="draw-ready">READY</div>'; }).join("");
}

function drawUnique(pool, amount) {
  const shuffled = pool.slice();
  for (let i=shuffled.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1));
    [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
  }
  return shuffled.slice(0,amount);
}

function reelCard(item) {
  return '<article class="draw-card"><div class="draw-card-art"><img src="' + imageFor(item) + '" alt="" draggable="false"></div><strong>' + htmlEscape(item.label) + '</strong><small>' + htmlEscape(item.category) + '</small></article>';
}

function createDrawSlot(item, pool, slotNumber, startDelay) {
  const target = 25 + Math.floor(Math.random()*5);
  const sequence = Array.from({length:target+9}, function () { return pool[Math.floor(Math.random()*pool.length)]; });
  sequence[target] = item;
  const id = "draw-track-" + slotNumber;
  const slot = document.createElement("div");
  slot.className = "draw-slot";
  slot.innerHTML = '<div class="draw-viewport"><div class="draw-track" id="' + id + '">' + sequence.map(reelCard).join("") + '</div><div class="draw-marker" aria-hidden="true"></div></div>';
  return {slot:slot,target:target,startDelay:startDelay};
}

function spinMarket() {
  if (isSpinning || !weapons.length) return;
  const tier = getTier();
  const guns = drawUnique(weapons.filter(function (item) { return item.category === "Firearm"; }), tier.guns);
  const melee = drawUnique(weapons.filter(function (item) { return item.category === "Melee"; }), tier.melee);
  const gunContainer = document.getElementById("gun-draws");
  const meleeContainer = document.getElementById("melee-draws");
  const slots = [];
  let slotNumber = 0;
  function addSlots(container, results, pool) {
    container.innerHTML = "";
    results.forEach(function (item) {
      const built = createDrawSlot(item, pool, slotNumber, slotNumber*220);
      container.appendChild(built.slot);
      const track = built.slot.querySelector(".draw-track");
      const viewport = built.slot.querySelector(".draw-viewport");
      const finalCard = track.children[built.target];
      const finalOffset = finalCard.offsetLeft + finalCard.offsetWidth/2 - viewport.clientWidth/2;
      track.style.setProperty("--spin-delay", built.startDelay + "ms");
      track.dataset.finalOffset = String(-Math.max(0,finalOffset));
      track.dataset.target = String(built.target);
      slots.push({track:track});
      slotNumber++;
    });
  }
  addSlots(gunContainer, guns, weapons.filter(function (item) { return item.category === "Firearm"; }));
  addSlots(meleeContainer, melee, weapons.filter(function (item) { return item.category === "Melee"; }));
  isSpinning = true;
  const spinButton = document.getElementById("spin-button");
  spinButton.disabled = true;
  spinButton.innerHTML = '<span class="button-dice" aria-hidden="true">✦</span> Rolling your loadout…';
  document.getElementById("loadout-tier").disabled = true;
  document.getElementById("spin-result").hidden = true;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      slots.forEach(function (entry) {
        entry.track.classList.add("is-spinning");
        entry.track.style.transform = "translateX(" + entry.track.dataset.finalOffset + "px)";
      });
    });
  });
  const wait = reduced ? 50 : 8500 + Math.max(0, slots.length-1)*220;
  window.setTimeout(function () {
    slots.forEach(function (entry) {
      const card = entry.track.children[Number(entry.track.dataset.target)];
      if (card) card.classList.add("is-winner");
    });
    const resultList = guns.concat(melee);
    document.getElementById("spin-result").innerHTML = '<div class="result-copy"><span>Tier ' + htmlEscape(tier.tier) + ' · Loadout draft</span><strong>' + guns.length + ' firearm' + (guns.length === 1 ? "" : "s") + ' · ' + melee.length + ' melee</strong><div class="result-chips">' + resultList.map(function (item) { return '<span class="result-chip">' + htmlEscape(item.label) + '</span>'; }).join("") + '</div></div><span class="badge badge-blue">Ready</span>';
    document.getElementById("spin-result").hidden = false;
    spinButton.disabled = false;
    spinButton.innerHTML = '<span class="button-dice" aria-hidden="true">✦</span> Spin again';
    document.getElementById("loadout-tier").disabled = false;
    isSpinning = false;
  }, wait);
}

function renderCatalog() {
  const query = document.getElementById("weapon-search").value.trim().toLocaleLowerCase("en-GB");
  const filtered = weapons.filter(function (item) {
    const typeMatch = catalogFilter === "all" || item.category === catalogFilter;
    const textMatch = !query || (item.label + " " + item.id + " " + item.category).toLocaleLowerCase("en-GB").includes(query);
    return typeMatch && textMatch;
  });
  document.getElementById("weapon-grid").innerHTML = filtered.map(function (item) {
    return '<article class="weapon-card" title="' + htmlEscape(item.label) + '">' +
      '<div class="weapon-card-art"><img src="' + imageFor(item) + '" alt="' + htmlEscape(item.label) + '" loading="lazy"></div>' +
      '<span class="weapon-card-name">' + htmlEscape(item.label) + '</span><span class="weapon-card-kind">' + htmlEscape(item.category) + '</span></article>';
  }).join("");
  document.getElementById("catalog-count").textContent = filtered.length + " item" + (filtered.length === 1 ? "" : "s");
  document.getElementById("weapon-empty").hidden = filtered.length !== 0;
}

function ruleCard(rule, groupLabel) {
  return '<article class="rule-card"><div class="rule-card-top"><span class="rule-code">' + htmlEscape(rule[0]) + '</span><span class="rule-tag">' + groupLabel + '</span></div><h3>' + htmlEscape(rule[1]) + '</h3><p>' + htmlEscape(rule[2]) + '</p></article>';
}

function renderCivilianRules() {
  const query = document.getElementById("civilian-search").value.trim().toLocaleLowerCase("en-GB");
  const filtered = civilianRules.filter(function (rule) { return !query || rule.join(" ").toLocaleLowerCase("en-GB").includes(query); });
  document.getElementById("civilian-rules-grid").innerHTML = filtered.map(function (rule) { return ruleCard(rule,"Civilian RP"); }).join("");
  document.getElementById("civilian-count").textContent = filtered.length + " of " + civilianRules.length + " civilian rules";
  document.getElementById("civilian-empty").hidden = filtered.length !== 0;
}

function renderFactionRules() {
  const query = document.getElementById("faction-search").value.trim().toLocaleLowerCase("en-GB");
  const matches = function (rule) { return !query || rule.join(" ").toLocaleLowerCase("en-GB").includes(query); };
  const faction = factionRules.filter(matches);
  const evidence = evidenceRules.filter(matches);
  document.getElementById("faction-rules-grid").innerHTML = faction.map(function (rule) { return ruleCard(rule,"Faction ROE"); }).join("");
  document.getElementById("evidence-rules-grid").innerHTML = evidence.map(function (rule) { return ruleCard(rule,"Evidence"); }).join("");
  document.getElementById("faction-count").textContent = faction.length + " faction rules · " + evidence.length + " evidence rules";
  document.getElementById("faction-empty").hidden = faction.length + evidence.length !== 0;
  document.querySelector(".evidence-title").hidden = evidence.length === 0;
}

function renderFactionTiers() {
  document.getElementById("faction-tier-grid").innerHTML = tiers.map(function (tier) {
    const gunLabel = tier.guns === 1 ? "firearm" : "firearms";
    const meleeLabel = tier.melee === 1 ? "melee item" : "melee items";
    const details = tier.guns === 0
      ? tier.melee + " " + meleeLabel + " and no firearms."
      : tier.guns + " " + gunLabel + " and " + tier.melee + " " + meleeLabel + ".";
    return '<article class="tier-card"><span class="tier-stage">Faction tier · Boroughs</span><h2>Tier ' + htmlEscape(tier.tier) + '</h2><p>' + htmlEscape(details) + '</p><div class="tier-caps"><div class="tier-cap"><span>Firearms</span><strong>' + tier.guns + '</strong></div><div class="tier-cap"><span>Melee</span><strong>' + tier.melee + '</strong></div></div><ul class="tier-points"><li>Black Market rolls this exact category count.</li><li>Random picks are drawn from the matching item pool.</li></ul></article>';
  }).join("");
}

function init() {
  document.querySelectorAll(".nav-link, a[data-page]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      setPage(link.dataset.page, true);
    });
  });
  window.addEventListener("hashchange", function () { setPage(location.hash.slice(1), false); });
  document.querySelectorAll("[data-scroll]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.getElementById(link.dataset.scroll);
      if (target) target.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",block:"start"});
    });
  });
  document.getElementById("spin-button").addEventListener("click", spinMarket);
  document.getElementById("loadout-tier").addEventListener("change", renderTier);
  document.getElementById("weapon-search").addEventListener("input", renderCatalog);
  document.querySelectorAll(".catalog-filter").forEach(function (button) {
    button.addEventListener("click", function () {
      catalogFilter = button.dataset.catalogFilter;
      document.querySelectorAll(".catalog-filter").forEach(function (other) {
        const active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      renderCatalog();
    });
  });
  document.getElementById("civilian-search").addEventListener("input", renderCivilianRules);
  document.getElementById("faction-search").addEventListener("input", renderFactionRules);
  renderTier();
  renderCivilianRules();
  renderFactionRules();
  renderFactionTiers();
  fetch("weapons.json").then(function (response) {
    if (!response.ok) throw new Error("Weapon list unavailable");
    return response.json();
  }).then(function (data) {
    weapons = data;
    renderStats();
    renderCatalog();
    renderTier();
  }).catch(function () {
    document.getElementById("stat-total").textContent = "—";
    document.getElementById("weapon-grid").innerHTML = '<p class="empty-state">The item list is unavailable at the moment.</p>';
    document.getElementById("reel-hint").textContent = "The market list could not be loaded.";
  });
  setPage(location.hash.slice(1), false);
}

document.addEventListener("DOMContentLoaded", init);
