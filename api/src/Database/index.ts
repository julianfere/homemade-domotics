import { PrismaClient } from '@prisma/client'

class Database {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async getUser({ username, password }: { username: string, password: string }) {
    return this.wrap(async () => {
      return await this.prisma.user.findUnique({
        where: {
          username,
          password
        }
      })
    })
  }

  private async wrap<T>(callback: () => Promise<T>): Promise<T> {
    return callback().then(async (data) => {
      await this.prisma.$disconnect()
      return data
    }).catch(async (e) => {
      console.error(e)
      await this.prisma.$disconnect()
      process.exit(1)
    })
  }
}

export default new Database()