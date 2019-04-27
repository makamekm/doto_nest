export enum StageFieldType {
  Button = 'button',
  DropDown = 'drop_down',
  Dialog = 'dialog',
  Input = 'input',
  Email = 'email',
  Password = 'password',
  Select = 'select',
  Switch = 'switch',
  Radio = 'radio',
  Upload = 'upload',
  DatePicker = 'date_picker',
  TimePicker = 'time_picker',
  Checkbox = 'checkbox',
  Autocomplete = 'autocomplete',
  Tag = 'tag',
  Tags = 'tags',
  Panel = 'panel',
  Box = 'box',
  Table = 'table',
  Navbar = 'navbar',
  Tabs = 'tabs',
}

export interface StageFieldModels {
  key: string;
  type: StageFieldType;
  position: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  children: StageFieldModels[];
}

export interface FormModel {
  fields: StageFieldModels[];
}

export interface CronJobModel {
  name: string;
  schedule: boolean; // Cron Time Table
}

export interface StageModel {
  form: FormModel;
  lockable: boolean; // Can set lockerUser
  delegable: boolean; // Can set processingUser
  commentable: boolean;
  js: string;
  jsParsedInfo: {
    nextStagesBufferedKeys: string[];
    cronJobs: CronJobModel[];
    serverless: boolean;
  };
}

export interface GroupModel {
  name: string;
  users: UserModel[];
}

export interface PipelineStageModel {
  stage: StageModel;
  nextPipelineStage: PipelineStageModel;
  processingGroups: GroupModel[];
  position: {
    x: number;
    y: number;
  };
}

export interface PipelineModel {
  name: string;
  groups: GroupModel[];
  pipelineStages: PipelineStageModel[];
}

export interface CommentModel {
  author: UserModel;
  text: string;
  date: Date;
  answers: CommentModel[];
}

export enum PipelineStateType {
  Awaiting = 'awaiting', // If is awaiting for being processed
  Paused = 'paused', // If has been paused my moderator
  Locked = 'locked', // If has been locked
  Processing = 'processing', // If Is in processing
  Archived = 'archived', // If has been processed
  Downgraded = 'downgraded', // If has pipelineStage has been removed
}

export interface DataFieldModel {
  key: string; // Unique for data in a row;
  serializedValue: string;
  data?: DataModel;
}

export interface DataModel {
  fields: DataFieldModel[];
}

export interface ProcessModel {
  pipeline: PipelineModel;
  pipelineStage: PipelineStageModel;
  state: PipelineStateType;
  data: DataModel;
  comments: CommentModel[];
  lockerUser: UserModel;
  processingUser: UserModel;
}

export interface ProcessWatcherModel {
  process: ProcessModel;
  user: UserModel;
}

export enum UserSourceType {
  Google = 'google',
  Local = 'local',
}

export interface UserAuthenticationModel {
  token: string;
  source: UserSourceType;
  password: string;
  user: UserModel;
}

export interface UserModel {
  username: string;
  email: string;
  verified: boolean;
  authentications: UserAuthenticationModel[];
}
