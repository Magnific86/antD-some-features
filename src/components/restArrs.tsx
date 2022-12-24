export const labels = [
  "welcome",
  "about",
  "animeAlbum",
  "formUser",
  "carousel",
  "usersTable",
  "manyPhotos",
  "lol",
];

export const selectArray = labels.map((lab: string) => (
  <option key={lab} value={lab}>
    {lab}
  </option>
));
