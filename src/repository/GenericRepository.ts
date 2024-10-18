import { BaseEntity, DeleteResult, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';

class GenericRepository<T extends ObjectLiteral> {
    protected repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async getAll(): Promise<T[]> {
        return this.repository.find();
    }
    async getById(id: number): Promise<T | null> {
        return await this.repository.findOne({
            where: { id } as unknown as FindOptionsWhere<T>,
        });
    }

    async findOneByUser(user: string): Promise<T | null> {
        return this.repository.findOne({ where: { user: user } } as any);
    }

    async create(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    async update(id: string, update: T): Promise<T> {
        const isUpdated = await this.repository.findOne({
            where: { id } as unknown as FindOptionsWhere<T>,
        });

        if (!isUpdated) {
            throw new Error('Not found');
        }
        await this.repository.save({ ...isUpdated, ...update });
        return { ...isUpdated, ...update };
    }

    async delete(id: string): Promise<{ message: string }> {
        const deleteResult: DeleteResult = await this.repository.softDelete(id);
        if (deleteResult.affected === 0) {
            throw new Error('Erro ao deletar');
        }
        return { message: 'Deletado com sucesso' };
    }

    async login(email: string, password: string): Promise<T | null> {
        return this.repository.findOne({
            where: { email, password } as unknown as FindOptionsWhere<T>,
        });
    }

    async save(entity: T): Promise<T> {
        return this.repository.save(entity);
    }
}

export default GenericRepository;
