export type Dimension = 'D1' | 'D2' | 'D3' | 'D4';

export interface Question {
  id: number;
  dimension: Dimension;
  text: string;
  optionA: {
    text: string;
    value: string; // 'T', 'S', 'P', 'L'
  };
  optionB: {
    text: string;
    value: string; // 'I', 'X', 'R', 'M'
  };
}

export const questions: Question[] = [
  // D1: 资源策略 (T: 囤积型 vs I: 即兴型)
  {
    id: 1,
    dimension: 'D1',
    text: '新卡池开了，你手里有16000星琼/原石，你的第一反应是？',
    optionA: { text: '先看看评测，规划一下再决定抽不抽', value: 'T' },
    optionB: { text: '先来一发10连试试手气，万一出了呢', value: 'I' },
  },
  {
    id: 2,
    dimension: 'D1',
    text: '你会在一个「未来可能出」的角色身上提前囤多少抽？',
    optionA: { text: '200抽起步，我要确保大保底拿下', value: 'T' },
    optionB: { text: '不超过50抽，未来的事未来再说', value: 'I' },
  },
  {
    id: 3,
    dimension: 'D1',
    text: '看到月卡快到期了，你通常？',
    optionA: { text: '算好时间，到期当天再续，绝不多花一分', value: 'T' },
    optionB: { text: '看到提示就直接续了，懒得精打细算', value: 'I' },
  },
  {
    id: 4,
    dimension: 'D1',
    text: '当你看到商店里有限时打折的材料包时，你会？',
    optionA: { text: '仔细计算性价比和自己的需求再决定', value: 'T' },
    optionB: { text: '感觉划算就直接买了，早买早享受', value: 'I' },
  },
  {
    id: 5,
    dimension: 'D1',
    text: '你在规划抽卡时，最常做的事是？',
    optionA: { text: '看各种前瞻和爆料，标记每个版本的目标和预算', value: 'T' },
    optionB: { text: '从不规划，看到对眼缘的就抽，抽不到就算了', value: 'I' },
  },

  // D2: 养成动机 (S: 强度型 vs X: 真爱型)
  {
    id: 6,
    dimension: 'D2',
    text: '你培养一个角色的核心理由通常是？',
    optionA: { text: '因为TA在当前版本深渊/高难中表现出色', value: 'S' },
    optionB: { text: '因为我特别喜欢TA的人设、故事或声优', value: 'X' },
  },
  {
    id: 7,
    dimension: 'D2',
    text: '你最喜欢的角色在节奏榜上被评测为「下水道」，你会？',
    optionA: { text: '有点犹豫，可能会优先把资源留给更强的角色', value: 'S' },
    optionB: { text: '依然拉满！真爱无价，强度只是版本的事', value: 'X' },
  },
  {
    id: 8,
    dimension: 'D2',
    text: '你的体力/树脂最常消耗在哪里？',
    optionA: { text: '死磕遗器/圣遗物副本，追求极品双暴词条', value: 'S' },
    optionB: { text: '刷各种材料给喜欢的角色升级突破，先拉满再说', value: 'X' },
  },
  {
    id: 9,
    dimension: 'D2',
    text: '当你看到一个超强的冷门配队攻略时，你的反应是？',
    optionA: { text: '仔细研究并尝试复刻，看能不能提升深渊成绩', value: 'S' },
    optionB: { text: '扫一眼就过，我还是喜欢用我喜欢的角色配队', value: 'X' },
  },
  {
    id: 10,
    dimension: 'D2',
    text: '一个新角色，强度一般但剧情塑造超神，你会为他氪金吗？',
    optionA: { text: '不太会，我氪金主要还是为了游戏体验和强度', value: 'S' },
    optionB: { text: '必须的！好的剧情和人设值得我为爱买单', value: 'X' },
  },

  // D3: 探索风格 (P: 完美型 vs R: 速通型)
  {
    id: 11,
    dimension: 'D3',
    text: '新地图/新区域开放后，你做的第一件事往往是？',
    optionA: { text: '边跑图边找宝箱，点亮所有传送点，确保不遗漏', value: 'P' },
    optionB: { text: '跟着任务指引直接推主线，宝箱随缘开', value: 'R' },
  },
  {
    id: 12,
    dimension: 'D3',
    text: '看到自己地图探索度停在 98% 时，你会？',
    optionA: { text: '很难受，必须查攻略补全最后那几个阴间宝箱', value: 'P' },
    optionB: { text: '无所谓，主线和主要奖励拿到就行了', value: 'R' },
  },
  {
    id: 13,
    dimension: 'D3',
    text: '路上偶遇一个步骤繁琐但没有任务指引的解谜机关，你？',
    optionA: { text: '立刻停下来研究，不拿到这个箱子绝不走', value: 'P' },
    optionB: { text: '标记一下，等以后有空或者想起来再说', value: 'R' },
  },
  {
    id: 14,
    dimension: 'D3',
    text: '你对游戏内的「成就系统」怎么看？',
    optionA: { text: '我会尽可能查攻略做完全成就，哪怕奖励很少', value: 'P' },
    optionB: { text: '随缘，红点跳出来了就领，从不刻意去刷', value: 'R' },
  },
  {
    id: 15,
    dimension: 'D3',
    text: '遇到剧情对话，如果可以跳过，你的习惯是？',
    optionA: { text: '基本不跳，每一个选项和彩蛋对话都要点来看看', value: 'P' },
    optionB: { text: '除了特别感兴趣的，能跳过绝不多看一秒', value: 'R' },
  },

  // D4: 社交模式 (L: 独行型 vs M: 共斗型)
  {
    id: 16,
    dimension: 'D4',
    text: '在游戏里，你对加入公会/社团的态度是？',
    optionA: { text: '我更喜欢一个人清净地玩，把二游当单机体验', value: 'L' },
    optionB: { text: '非常乐意！我喜欢和大家聊天、组队、分享日常', value: 'M' },
  },
  {
    id: 17,
    dimension: 'D4',
    text: '你的游戏好友列表状况通常是？',
    optionA: { text: '人很少，大多是现实朋友或者做任务必须加的人', value: 'L' },
    optionB: { text: '总是满满当当的，看到好友申请基本都会通过', value: 'M' },
  },
  {
    id: 18,
    dimension: 'D4',
    text: '在世界频道/大厅看到萌新求助卡关时，你倾向于？',
    optionA: { text: '默默路过，或者偶尔回复一句让他去搜攻略', value: 'L' },
    optionB: { text: '热心解答，如果有联机功能还会直接进他世界帮忙', value: 'M' },
  },
  {
    id: 19,
    dimension: 'D4',
    text: '每天上线清完体力做完日常后，你会？',
    optionA: { text: '直接下线，绝不逗留', value: 'L' },
    optionB: { text: '找游戏好友聊两句，或者在世界频道水一水', value: 'M' },
  },
  {
    id: 20,
    dimension: 'D4',
    text: '如果让你选择一种最理想的游戏体验，你觉得是？',
    optionA: { text: '一个人深度沉浸在精美的单人剧情里，不受任何打扰', value: 'L' },
    optionB: { text: '和朋友们一起联机探索、打本、整活，有人陪伴才好玩', value: 'M' },
  },
];
