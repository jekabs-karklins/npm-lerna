import { container, inject, injectable } from 'tsyringe';

import { Tokens } from '../config/Tokens';
import { QuestionaryDataSource } from '../datasources/QuestionaryDataSource';
import { TemplateDataSource } from '../datasources/TemplateDataSource';
import { VisitDataSource } from '../datasources/VisitDataSource';
import { Authorized } from '../decorators';
import { Roles } from '../models/Role';
import { UserWithRole } from '../models/User';
import { VisitRegistration } from '../models/VisitRegistration';
import { VisitsFilter } from '../resolvers/queries/VisitsQuery';
import { VisitAuthorization } from './../utils/VisitAuthorization';
export interface GetRegistrationsFilter {
  questionaryIds?: number[];
  visitId?: number;
}

@injectable()
export default class VisitQueries {
  private visitAuth = container.resolve(VisitAuthorization);

  constructor(
    @inject(Tokens.VisitDataSource)
    public dataSource: VisitDataSource,
    @inject(Tokens.QuestionaryDataSource)
    public questionaryDataSource: QuestionaryDataSource,
    @inject(Tokens.TemplateDataSource)
    public templateDataSource: TemplateDataSource
  ) {}

  @Authorized()
  async getVisit(agent: UserWithRole | null, id: number) {
    const visit = await this.dataSource.getVisit(id);
    if (!visit) {
      return null;
    }
    const hasRights = await this.visitAuth.hasReadRights(agent, visit);
    if (hasRights === false) {
      return null;
    }

    return visit;
  }

  @Authorized([Roles.USER_OFFICER])
  async getVisits(agent: UserWithRole | null, filter?: VisitsFilter) {
    return this.dataSource.getVisits(filter);
  }

  @Authorized()
  async getMyVisits(agent: UserWithRole | null, filter?: VisitsFilter) {
    // TODO return also visits you are part of the team
    return this.dataSource.getVisits({ ...filter, creatorId: agent!.id });
  }

  async getRegistrations(
    user: UserWithRole | null,
    filter: GetRegistrationsFilter
  ): Promise<VisitRegistration[]> {
    return this.dataSource.getRegistrations(filter);
  }

  @Authorized()
  async getRegistration(
    user: UserWithRole | null,
    visitId: number
  ): Promise<VisitRegistration | null> {
    return this.dataSource.getRegistration(user!.id, visitId);
  }

  @Authorized()
  async getVisitByScheduledEventId(
    agent: UserWithRole | null,
    eventId: number
  ) {
    return this.dataSource.getVisitByScheduledEventId(eventId);
  }
}
