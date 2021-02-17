import { 
  IAdmin, 
  IAdminInfo, 
  IGetAdmin, 
  ILogin, 
  IUserForm
} from '@/typings/user'
import { OK } from "@/network/axios/status"
import { getAdminAccount, getUserInfo, userLogin } from "@/network/user"
import { ComponentInternalInstance, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"


export interface IUseAdmin {
  login: (user: IUserForm) => Promise<void>
  logout: () => void
  getAdminInfo: () => Promise<IAdminInfo>
  getAdmin: () => Promise<IGetAdmin>
}

export function useAdmin(): IUseAdmin {

  const router = useRouter()
  const { proxy } = getCurrentInstance() as ComponentInternalInstance


  // 登录
  const login = async (user: IUserForm): Promise<void> => {
    const result = await userLogin<ILogin>(user)
    if (result.code === OK) {
      localStorage.setItem('uid', result.data.uid)
      router.replace('/admin')
    } else {
      proxy?.$message.error(result.data)
    }
  }

  // 退出登录
  const logout = (): void => {
    // 清除token
    localStorage.removeItem('token')
    router.replace('/login')
  }

  // 获取管理员信息
  const getAdminInfo = async (): Promise<IAdminInfo> => {
    const uid = localStorage.getItem('uid') as string
    const result = await getUserInfo<IAdmin>(uid)
    return result.data
  }

  // 获取管理员账号
  const getAdmin = async (): Promise<IGetAdmin> => {
    const result = await getAdminAccount<IGetAdmin>()
    return result
  }

  return {
    login,
    logout,
    getAdminInfo,
    getAdmin
  }
}