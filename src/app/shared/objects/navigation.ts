export const navigation = [
  {
    object: 'Lieferdienst', childs: [
      {subject: 'Lieferdienst werden (open)', path: 'lieferdienst-werden'},
      {subject: 'Login', path: 'login'},
      // {subject: 'Abo ändern', path: 'login/abo'},
    ],
    action: {subject: 'Abmelden', path: 'login', color: 'warn'}
  },
  {
    object: 'Rechtliches', childs: [
      {subject: 'Kontakt', path: 'kontakt'},
      {subject: 'Impressum (open)', path: 'impressum'},
      {subject: 'Datenschutz (open)', path: 'datenschutz'}
    ]
  },
];
