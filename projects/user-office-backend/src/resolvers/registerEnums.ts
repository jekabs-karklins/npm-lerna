import { registerEnumType } from 'type-graphql';

import { Event } from '../events/event.enum';
import { AllocationTimeUnits } from '../models/Call';
import {
  DependenciesLogicOperator,
  EvaluatorOperator,
} from '../models/ConditionEvaluator';
import { FeatureId } from '../models/Feature';
import { PageName } from '../models/Page';
import { ProposalEndStatus, ProposalPublicStatus } from '../models/Proposal';
import { QuestionFilterCompareOperator } from '../models/Questionary';
import { ReviewerFilter, ReviewStatus } from '../models/Review';
import { SampleStatus } from '../models/Sample';
import { SettingsId } from '../models/Settings';
import { ShipmentStatus } from '../models/Shipment';
import { TechnicalReviewStatus } from '../models/TechnicalReview';
import {
  DataType,
  TemplateCategoryId,
  TemplateGroupId,
} from '../models/Template';
import { UserRole } from '../models/User';
import { VisitStatus } from '../models/Visit';
import { NumberValueConstraint } from './types/FieldConfig';
import {
  EquipmentAssignmentStatus,
  ProposalBookingStatusCore,
  ScheduledEventBookingType,
} from './types/ProposalBooking';

export const registerEnums = () => {
  registerEnumType(TemplateCategoryId, { name: 'TemplateCategoryId' });
  registerEnumType(ProposalEndStatus, { name: 'ProposalEndStatus' });
  registerEnumType(ProposalPublicStatus, { name: 'ProposalPublicStatus' });
  registerEnumType(ReviewStatus, { name: 'ReviewStatus' });
  registerEnumType(ReviewerFilter, { name: 'ReviewerFilter' });
  registerEnumType(TechnicalReviewStatus, { name: 'TechnicalReviewStatus' });
  registerEnumType(PageName, { name: 'PageName' });
  registerEnumType(UserRole, { name: 'UserRole' });
  registerEnumType(EvaluatorOperator, { name: 'EvaluatorOperator' });
  registerEnumType(DataType, { name: 'DataType' });
  registerEnumType(SampleStatus, { name: 'SampleStatus' });
  registerEnumType(Event, { name: 'Event' });
  registerEnumType(ShipmentStatus, { name: 'ShipmentStatus' });
  registerEnumType(DependenciesLogicOperator, {
    name: 'DependenciesLogicOperator',
  });
  registerEnumType(FeatureId, { name: 'FeatureId' });
  registerEnumType(SettingsId, { name: 'SettingsId' });
  registerEnumType(NumberValueConstraint, { name: 'NumberValueConstraint' });
  registerEnumType(QuestionFilterCompareOperator, {
    name: 'QuestionFilterCompareOperator',
  });
  registerEnumType(VisitStatus, {
    name: 'VisitStatus',
  });
  registerEnumType(AllocationTimeUnits, {
    name: 'AllocationTimeUnits',
  });
  registerEnumType(TemplateGroupId, {
    name: 'TemplateGroupId',
  });
  registerEnumType(ScheduledEventBookingType, {
    name: 'ScheduledEventBookingType',
  });
  registerEnumType(ProposalBookingStatusCore, {
    name: 'ProposalBookingStatusCore',
  });
  registerEnumType(EquipmentAssignmentStatus, {
    name: 'EquipmentAssignmentStatus',
  });
};
