export interface ActivityEntry {
  createdAt: string;
  id: string;
  type: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting';
  icon: 'question_answer' | 'phone' | 'local_cafe' | 'local_bar' | 'person';
  note: string;
}
