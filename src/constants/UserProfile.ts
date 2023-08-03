import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profileBg1,
  profileBg2,
  profileBg3,
  profileBg4,
  profileBg5,
  profileBg6,
} from '@assets/png';

const db = {
  2: {
    nickName: 'Lena',
    avatar: avatar1,
    profile: profile1,
    profileBg: profileBg1,
    shareLink: 'https://www.wity.im/lena',
  },
  3: {
    nickName: '개미',
    avatar: avatar2,
    profile: profile2,
    profileBg: profileBg2,
    shareLink: 'https://www.wity.im/han5991',
  },
  4: {
    nickName: 'Ramiel',
    avatar: avatar3,
    profile: profile3,
    profileBg: profileBg3,
    shareLink: 'https://www.wity.im/testfile',
  },
  5: {
    nickName: '이인호',
    avatar: avatar4,
    profile: profile4,
    profileBg: profileBg4,
    shareLink: 'https://www.wity.im/nocoffee',
  },
  6: {
    nickName: '초보 개발자',
    avatar: avatar5,
    profile: profile5,
    profileBg: profileBg5,
    shareLink: 'https://www.wity.im/bigtyno',
  },
  7: {
    nickName: '초보 개발자',
    avatar: avatar6,
    profile: profile6,
    profileBg: profileBg6,
    shareLink: 'https://www.wity.im/bigtyno',
  },
  99: {
    nickName: '초보 개발자',
    avatar: avatar2,
    profile: profile2,
    profileBg: profileBg3,
    shareLink: 'https://www.wity.im/bigtyno',
  }
};

export type ProfileIds = keyof typeof db;
export default db;
