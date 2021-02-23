import { createStore } from 'vuex'
import { columnDate, postDate } from './testDate'
export interface ColumnProps {
  id: number;
  title: string;
  description: string;
}
export interface PostProps {
  id: number;
  titile: string;
  content: string;
  createdAt: string;
  columnId: number;
}
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDateProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDateProps>({
  state: {
    columns: columnDate,
    posts: postDate,
    user: {
      isLogin: false,
      id: 1001
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'ling', id: 1001 }
    },
    creatPost (state, newPost: PostProps) {
      state.posts.push(newPost)
    }
  },
  getters: {
    getCurrentColumn (state) {
      return (id: number) => {
        return state.columns.find((column) => column.id === id)
      }
    },
    getCurrentPosts (state) {
      return (cid: number) => {
        return state.posts.filter((post) => post.columnId === cid)
      }
    }
  }
})

export default store
