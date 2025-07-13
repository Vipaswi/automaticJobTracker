export const jobTitlePrefixes = [
  "\\bintern\\b",
  "\\bassociate(?:[-\\s]?level)?\\b",
  "\\bentry[-\\s]?level\\b",
  "\\bjunior(?:[-\\s]?level)?\\b",
  "\\bsenior(?:[-\\s]?level)?\\b",
  "\\bjr\\.?\\b",
  "\\bsr\\.?\\b",
  "\\blead\\b"
];

export const jobTitlePostfixes = [
  "\\bi{1,3}\\b",    
  "\\biv\\b",
  "\\bv\\b",
  "\\bvi\\b",
  "\\bintern\\b"
];

export const jobTimeOfYear = [
  "\\bfall[-\\s]?\\d{4}\\b",
  "\\bwinter[-\\s]?\\d{4}\\b",
  "\\bsummer[-\\s]?\\d{4}\\b",
  "\\bspring[-\\s]?\\d{4}\\b"
];
