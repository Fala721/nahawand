export type DropdownItem = {
    name: string;
  }


export type Maqam = {
  name : 'Bayat' | 'Rast' | 'Nahawand' | 'Sika' | 'Ajam' | 'Hijaz' | 'Saba' | 'Kurd';
}
export type MaqamKey = {
  key_note: 'Do' | 'Do Bemol' | 'Do Dieze' | 'Do 1/2 Bemol' | 'Do 1/2 Dieze' | 'Re' | 'Re Bemol' | 'Re Dieze' | 'Re 1/2 Bemol' | 'Mi' | 'Mi Bemol' | 'Mi Dieze' | 'Mi 1/2 Bemol' | 'Mi 1/2 Dieze' | 'Fa' | 'Fa Bemol' | 'Fa Dieze' | 'Fa 1/2 Bemol' | 'Fa 1/2 Dieze' | 'Sol' | 'Sol Bemol' | 'Sol Dieze' | 'Sol 1/2 Bemol' | 'Sol 1/2 Dieze' | 'La' | 'La Bemol' | 'La Dieze' | 'La 1/2 Bemol' | 'La 1/2 Dieze' | 'Si' | 'Si Bemol' | 'Si Dieze' | 'Si 1/2 Bemol' | 'Si 1/2 Dieze';

}
export type MaqamInfo = {
  name: string;
  value: string;
  icon: string;
  numofsheets: number;
}

export type Recentfile = {
  id: number;
  date: string;
  filename: string;
  author: string;
  filetype: string;
}

export type UserSignup = {
  email: string;
  password: string;
  confirm: string;
}

export type UserSigninCredintials = {
  email: string;
  password: string;
};

export type UserProfile = {
  firstname?: string;
  lastname?: string;
  avatar?: string;
  id?:string;
}

export type sheet = {
  id: string;
  title: string;
  status: string;
  main_maqam: Maqam;
  key_note: MaqamKey;
  instrument: string;
  genre: string;
  created_at: Date;
  file_url: string;
  user_id: string;
}

export type Clefs = {
  name: string;
  value: string;
  icon: string;
}

export type KeyNote = {
  name: string;
  value: string;
}

export type FileUploaderProps = {
  fieldChange: {async (file:File) : {
    
  }}
}