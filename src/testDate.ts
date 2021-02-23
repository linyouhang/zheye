import { ColumnProps, PostProps } from './store'
export const columnDate: ColumnProps[] = [
  { id: 1001, title: '测试1', description: '者也测试专栏1' },
  { id: 1002, title: '测试2', description: '者也测试专栏2' },
  { id: 1003, title: '测试3', description: '者也测试专栏3' }
]

export const postDate: PostProps[] = [
  { id: 1001, titile: '测试1', content: '这是一个测试数据1', createdAt: '2021/2/5', columnId: 1001 },
  { id: 1002, titile: '测试1', content: '这是一个测试数据2', createdAt: '2021/2/5', columnId: 1002 },
  { id: 1004, titile: '测试1', content: '这是一个测试数据3', createdAt: '2021/2/5', columnId: 1003 }
]
