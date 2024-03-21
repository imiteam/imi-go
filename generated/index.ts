import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Boolean or Boolean[] */
  BooleanAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanGetObjectsChatsWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanGetObjectsRolesWeaviate: { input: any; output: any; }
  /** Boolean or Boolean[] */
  BooleanGetObjectsTemplatesWeaviates: { input: any; output: any; }
  /** Float or Float[] */
  FloatAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Float or Float[] */
  FloatAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** Float or Float[] */
  FloatGetObjectsChatsWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Float or Float[] */
  FloatGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatGetObjectsRolesWeaviate: { input: any; output: any; }
  /** Float or Float[] */
  FloatGetObjectsTemplatesWeaviates: { input: any; output: any; }
  /** Int or Int[] */
  IntAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Int or Int[] */
  IntAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** Int or Int[] */
  IntGetObjectsChatsWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** Int or Int[] */
  IntGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntGetObjectsRolesWeaviate: { input: any; output: any; }
  /** Int or Int[] */
  IntGetObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextDateAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextDateAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextDateGetObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextDateGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateGetObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextDateGetObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextGetObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextGetObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextGetObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextStringAggregateObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringAggregateObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextStringAggregateObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringAggregateObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringAggregateObjectsTemplatesWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextStringGetObjectsChatsWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringGetObjectsDocumentsWeaviates: { input: any; output: any; }
  /** String or String[] */
  TextStringGetObjectsMessagesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringGetObjectsRolesWeaviate: { input: any; output: any; }
  /** String or String[] */
  TextStringGetObjectsTemplatesWeaviates: { input: any; output: any; }
  bigint: { input: any; output: any; }
  bpchar: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AggregateChatsWeaviate = {
  __typename?: 'AggregateChatsWeaviate';
  /** Aggregate this property"createdAt" */
  createdAt?: Maybe<AggregateChatsWeaviatecreatedAtObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateChatsWeaviateGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateChatsWeaviateMetaObject>;
  /** Aggregate this property"title" */
  title?: Maybe<AggregateChatsWeaviatetitleObj>;
  /** Aggregate this property"userId" */
  userId?: Maybe<AggregateChatsWeaviateuserIdObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateChatsWeaviateGroupedByObj = {
  __typename?: 'AggregateChatsWeaviateGroupedByObj';
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateChatsWeaviateMetaObject = {
  __typename?: 'AggregateChatsWeaviateMetaObject';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AggregateChatsWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateChatsWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateChatsWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateChatsWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateChatsWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateChatsWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateChatsWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<AggregateChatsWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<AggregateChatsWeaviateMoveTo>;
};

/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviatecreatedAtObj = {
  __typename?: 'AggregateChatsWeaviatecreatedAtObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateChatsWeaviatecreatedAtTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviatecreatedAtObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateChatsWeaviatecreatedAtTopOccurrencesObj = {
  __typename?: 'AggregateChatsWeaviatecreatedAtTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviatetitleObj = {
  __typename?: 'AggregateChatsWeaviatetitleObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateChatsWeaviatetitleTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviatetitleObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateChatsWeaviatetitleTopOccurrencesObj = {
  __typename?: 'AggregateChatsWeaviatetitleTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviateuserIdObj = {
  __typename?: 'AggregateChatsWeaviateuserIdObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateChatsWeaviateuserIdTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateChatsWeaviateuserIdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateChatsWeaviateuserIdTopOccurrencesObj = {
  __typename?: 'AggregateChatsWeaviateuserIdTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateDocumentsWeaviates = {
  __typename?: 'AggregateDocumentsWeaviates';
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateDocumentsWeaviatesGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateDocumentsWeaviatesMetaObject>;
  /** Aggregate this property"name" */
  name?: Maybe<AggregateDocumentsWeaviatesnameObj>;
  /** Aggregate this property"userId" */
  userId?: Maybe<AggregateDocumentsWeaviatesuserIdObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateDocumentsWeaviatesGroupedByObj = {
  __typename?: 'AggregateDocumentsWeaviatesGroupedByObj';
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateDocumentsWeaviatesMetaObject = {
  __typename?: 'AggregateDocumentsWeaviatesMetaObject';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AggregateDocumentsWeaviatesMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateDocumentsWeaviatesMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateDocumentsWeaviatesMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateDocumentsWeaviatesMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateDocumentsWeaviatesMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateDocumentsWeaviatesMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateDocumentsWeaviatesNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<AggregateDocumentsWeaviatesMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<AggregateDocumentsWeaviatesMoveTo>;
};

/** An object containing Aggregation information about this property */
export type AggregateDocumentsWeaviatesnameObj = {
  __typename?: 'AggregateDocumentsWeaviatesnameObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateDocumentsWeaviatesnameTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateDocumentsWeaviatesnameObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateDocumentsWeaviatesnameTopOccurrencesObj = {
  __typename?: 'AggregateDocumentsWeaviatesnameTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateDocumentsWeaviatesuserIdObj = {
  __typename?: 'AggregateDocumentsWeaviatesuserIdObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateDocumentsWeaviatesuserIdTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateDocumentsWeaviatesuserIdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateDocumentsWeaviatesuserIdTopOccurrencesObj = {
  __typename?: 'AggregateDocumentsWeaviatesuserIdTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateMessagesWeaviate = {
  __typename?: 'AggregateMessagesWeaviate';
  /** Aggregate this property"chatId" */
  chatId?: Maybe<AggregateMessagesWeaviatechatIdObj>;
  /** Aggregate this property"content" */
  content?: Maybe<AggregateMessagesWeaviatecontentObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateMessagesWeaviateGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateMessagesWeaviateMetaObject>;
};

/** An object containing the path and value of the grouped property */
export type AggregateMessagesWeaviateGroupedByObj = {
  __typename?: 'AggregateMessagesWeaviateGroupedByObj';
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateMessagesWeaviateMetaObject = {
  __typename?: 'AggregateMessagesWeaviateMetaObject';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AggregateMessagesWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateMessagesWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateMessagesWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateMessagesWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateMessagesWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateMessagesWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateMessagesWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<AggregateMessagesWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<AggregateMessagesWeaviateMoveTo>;
};

/** An object containing Aggregation information about this property */
export type AggregateMessagesWeaviatechatIdObj = {
  __typename?: 'AggregateMessagesWeaviatechatIdObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateMessagesWeaviatechatIdTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateMessagesWeaviatechatIdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateMessagesWeaviatechatIdTopOccurrencesObj = {
  __typename?: 'AggregateMessagesWeaviatechatIdTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateMessagesWeaviatecontentObj = {
  __typename?: 'AggregateMessagesWeaviatecontentObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateMessagesWeaviatecontentTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateMessagesWeaviatecontentObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateMessagesWeaviatecontentTopOccurrencesObj = {
  __typename?: 'AggregateMessagesWeaviatecontentTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** Hybrid search */
export type AggregateObjectsChatsWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AggregateObjectsChatsWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateObjectsChatsWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

export type AggregateObjectsChatsWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type AggregateObjectsChatsWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type AggregateObjectsChatsWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsChatsWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsChatsWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsChatsWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsChatsWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsChatsWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsChatsWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsChatsWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsChatsWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsChatsWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsChatsWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsChatsWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsChatsWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsChatsWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsChatsWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsChatsWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsChatsWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Hybrid search */
export type AggregateObjectsDocumentsWeaviatesHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AggregateObjectsDocumentsWeaviatesNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateObjectsDocumentsWeaviatesNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

export type AggregateObjectsDocumentsWeaviatesWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type AggregateObjectsDocumentsWeaviatesWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type AggregateObjectsDocumentsWeaviatesWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsDocumentsWeaviatesWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsDocumentsWeaviatesWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsDocumentsWeaviatesWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsDocumentsWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsDocumentsWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsDocumentsWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsDocumentsWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsDocumentsWeaviates']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsDocumentsWeaviatesWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsDocumentsWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsDocumentsWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsDocumentsWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsDocumentsWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsDocumentsWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsDocumentsWeaviates']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsDocumentsWeaviatesWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Hybrid search */
export type AggregateObjectsMessagesWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AggregateObjectsMessagesWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateObjectsMessagesWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

export type AggregateObjectsMessagesWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type AggregateObjectsMessagesWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type AggregateObjectsMessagesWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsMessagesWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsMessagesWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsMessagesWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsMessagesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsMessagesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsMessagesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsMessagesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsMessagesWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsMessagesWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsMessagesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsMessagesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsMessagesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsMessagesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsMessagesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsMessagesWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsMessagesWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObj = {
  __typename?: 'AggregateObjectsObj';
  ChatsWeaviate?: Maybe<Array<Maybe<AggregateChatsWeaviate>>>;
  DocumentsWeaviates?: Maybe<Array<Maybe<AggregateDocumentsWeaviates>>>;
  MessagesWeaviate?: Maybe<Array<Maybe<AggregateMessagesWeaviate>>>;
  RolesWeaviate?: Maybe<Array<Maybe<AggregateRolesWeaviate>>>;
  TemplatesWeaviates?: Maybe<Array<Maybe<AggregateTemplatesWeaviates>>>;
};


/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjChatsWeaviateArgs = {
  ask?: InputMaybe<QnATransformersAggregateChatsWeaviateAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hybrid?: InputMaybe<AggregateObjectsChatsWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<AggregateObjectsChatsWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<AggregateChatsWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsChatsWeaviateNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregateObjectsChatsWeaviateWhereInpObj>;
};


/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjDocumentsWeaviatesArgs = {
  ask?: InputMaybe<QnATransformersAggregateDocumentsWeaviatesAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hybrid?: InputMaybe<AggregateObjectsDocumentsWeaviatesHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<AggregateObjectsDocumentsWeaviatesNearObjectInpObj>;
  nearText?: InputMaybe<AggregateDocumentsWeaviatesNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsDocumentsWeaviatesNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregateObjectsDocumentsWeaviatesWhereInpObj>;
};


/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjMessagesWeaviateArgs = {
  ask?: InputMaybe<QnATransformersAggregateMessagesWeaviateAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hybrid?: InputMaybe<AggregateObjectsMessagesWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<AggregateObjectsMessagesWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<AggregateMessagesWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsMessagesWeaviateNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregateObjectsMessagesWeaviateWhereInpObj>;
};


/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjRolesWeaviateArgs = {
  ask?: InputMaybe<QnATransformersAggregateRolesWeaviateAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hybrid?: InputMaybe<AggregateObjectsRolesWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<AggregateObjectsRolesWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<AggregateRolesWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsRolesWeaviateNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregateObjectsRolesWeaviateWhereInpObj>;
};


/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjTemplatesWeaviatesArgs = {
  ask?: InputMaybe<QnATransformersAggregateTemplatesWeaviatesAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hybrid?: InputMaybe<AggregateObjectsTemplatesWeaviatesHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<AggregateObjectsTemplatesWeaviatesNearObjectInpObj>;
  nearText?: InputMaybe<AggregateTemplatesWeaviatesNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsTemplatesWeaviatesNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregateObjectsTemplatesWeaviatesWhereInpObj>;
};

/** Hybrid search */
export type AggregateObjectsRolesWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AggregateObjectsRolesWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateObjectsRolesWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

export type AggregateObjectsRolesWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type AggregateObjectsRolesWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type AggregateObjectsRolesWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsRolesWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsRolesWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsRolesWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsRolesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsRolesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsRolesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsRolesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsRolesWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsRolesWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsRolesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsRolesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsRolesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsRolesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsRolesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsRolesWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsRolesWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Hybrid search */
export type AggregateObjectsTemplatesWeaviatesHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AggregateObjectsTemplatesWeaviatesNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateObjectsTemplatesWeaviatesNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

export type AggregateObjectsTemplatesWeaviatesWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type AggregateObjectsTemplatesWeaviatesWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type AggregateObjectsTemplatesWeaviatesWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsTemplatesWeaviatesWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsTemplatesWeaviatesWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsTemplatesWeaviatesWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsTemplatesWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsTemplatesWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsTemplatesWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsTemplatesWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsTemplatesWeaviates']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsTemplatesWeaviatesWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<AggregateObjectsTemplatesWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsTemplatesWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateAggregateObjectsTemplatesWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<AggregateObjectsTemplatesWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringAggregateObjectsTemplatesWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextAggregateObjectsTemplatesWeaviates']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsTemplatesWeaviatesWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

export type AggregateRolesWeaviate = {
  __typename?: 'AggregateRolesWeaviate';
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateRolesWeaviateGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateRolesWeaviateMetaObject>;
  /** Aggregate this property"name" */
  name?: Maybe<AggregateRolesWeaviatenameObj>;
  /** Aggregate this property"title" */
  title?: Maybe<AggregateRolesWeaviatetitleObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateRolesWeaviateGroupedByObj = {
  __typename?: 'AggregateRolesWeaviateGroupedByObj';
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateRolesWeaviateMetaObject = {
  __typename?: 'AggregateRolesWeaviateMetaObject';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AggregateRolesWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateRolesWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateRolesWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateRolesWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateRolesWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateRolesWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateRolesWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<AggregateRolesWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<AggregateRolesWeaviateMoveTo>;
};

/** An object containing Aggregation information about this property */
export type AggregateRolesWeaviatenameObj = {
  __typename?: 'AggregateRolesWeaviatenameObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateRolesWeaviatenameTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateRolesWeaviatenameObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateRolesWeaviatenameTopOccurrencesObj = {
  __typename?: 'AggregateRolesWeaviatenameTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateRolesWeaviatetitleObj = {
  __typename?: 'AggregateRolesWeaviatetitleObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateRolesWeaviatetitleTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateRolesWeaviatetitleObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateRolesWeaviatetitleTopOccurrencesObj = {
  __typename?: 'AggregateRolesWeaviatetitleTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateTemplatesWeaviates = {
  __typename?: 'AggregateTemplatesWeaviates';
  /** Aggregate this property"description" */
  description?: Maybe<AggregateTemplatesWeaviatesdescriptionObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateTemplatesWeaviatesGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateTemplatesWeaviatesMetaObject>;
  /** Aggregate this property"name" */
  name?: Maybe<AggregateTemplatesWeaviatesnameObj>;
  /** Aggregate this property"title" */
  title?: Maybe<AggregateTemplatesWeaviatestitleObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateTemplatesWeaviatesGroupedByObj = {
  __typename?: 'AggregateTemplatesWeaviatesGroupedByObj';
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars['String']['output']>;
};

export type AggregateTemplatesWeaviatesMetaObject = {
  __typename?: 'AggregateTemplatesWeaviatesMetaObject';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AggregateTemplatesWeaviatesMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateTemplatesWeaviatesMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateTemplatesWeaviatesMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateTemplatesWeaviatesMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<AggregateTemplatesWeaviatesMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type AggregateTemplatesWeaviatesMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateTemplatesWeaviatesNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<AggregateTemplatesWeaviatesMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<AggregateTemplatesWeaviatesMoveTo>;
};

/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatesdescriptionObj = {
  __typename?: 'AggregateTemplatesWeaviatesdescriptionObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateTemplatesWeaviatesdescriptionTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatesdescriptionObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateTemplatesWeaviatesdescriptionTopOccurrencesObj = {
  __typename?: 'AggregateTemplatesWeaviatesdescriptionTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatesnameObj = {
  __typename?: 'AggregateTemplatesWeaviatesnameObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateTemplatesWeaviatesnameTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatesnameObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateTemplatesWeaviatesnameTopOccurrencesObj = {
  __typename?: 'AggregateTemplatesWeaviatesnameTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatestitleObj = {
  __typename?: 'AggregateTemplatesWeaviatestitleObj';
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars['Int']['output']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<Array<Maybe<AggregateTemplatesWeaviatestitleTopOccurrencesObj>>>;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars['String']['output']>;
};


/** An object containing Aggregation information about this property */
export type AggregateTemplatesWeaviatestitleObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateTemplatesWeaviatestitleTopOccurrencesObj = {
  __typename?: 'AggregateTemplatesWeaviatestitleTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars['Int']['output']>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type ChatsWeaviate = {
  __typename?: 'ChatsWeaviate';
  _additional?: Maybe<ChatsWeaviateAdditional>;
  createdAt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ChatsWeaviateAdditional = {
  __typename?: 'ChatsWeaviateAdditional';
  answer?: Maybe<ChatsWeaviateAdditionalAnswer>;
  certainty?: Maybe<Scalars['Float']['output']>;
  classification?: Maybe<ChatsWeaviateAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  explainScore?: Maybe<Scalars['String']['output']>;
  featureProjection?: Maybe<ChatsWeaviateAdditionalFeatureProjection>;
  group?: Maybe<ChatsWeaviateAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars['String']['output']>;
  lastUpdateTimeUnix?: Maybe<Scalars['String']['output']>;
  rerank?: Maybe<Array<Maybe<ChatsWeaviateAdditionalReranker>>>;
  score?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};


export type ChatsWeaviateAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['Int']['input']>;
  iterations?: InputMaybe<Scalars['Int']['input']>;
  learningRate?: InputMaybe<Scalars['Int']['input']>;
  perplexity?: InputMaybe<Scalars['Int']['input']>;
};


export type ChatsWeaviateAdditionalRerankArgs = {
  property?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type ChatsWeaviateAdditionalAnswer = {
  __typename?: 'ChatsWeaviateAdditionalAnswer';
  endPosition?: Maybe<Scalars['Int']['output']>;
  hasAnswer?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  startPosition?: Maybe<Scalars['Int']['output']>;
};

export type ChatsWeaviateAdditionalClassification = {
  __typename?: 'ChatsWeaviateAdditionalClassification';
  basedOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  completed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ChatsWeaviateAdditionalFeatureProjection = {
  __typename?: 'ChatsWeaviateAdditionalFeatureProjection';
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type ChatsWeaviateAdditionalGroup = {
  __typename?: 'ChatsWeaviateAdditionalGroup';
  count?: Maybe<Scalars['Int']['output']>;
  groupedBy?: Maybe<ChatsWeaviateAdditionalGroupGroupedBy>;
  hits?: Maybe<Array<Maybe<ChatsWeaviateAdditionalGroupHits>>>;
  id?: Maybe<Scalars['Int']['output']>;
  maxDistance?: Maybe<Scalars['Float']['output']>;
  minDistance?: Maybe<Scalars['Float']['output']>;
};

export type ChatsWeaviateAdditionalGroupGroupedBy = {
  __typename?: 'ChatsWeaviateAdditionalGroupGroupedBy';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ChatsWeaviateAdditionalGroupHits = {
  __typename?: 'ChatsWeaviateAdditionalGroupHits';
  _additional?: Maybe<ChatsWeaviateAdditionalGroupHitsAdditional>;
  createdAt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ChatsWeaviateAdditionalGroupHitsAdditional = {
  __typename?: 'ChatsWeaviateAdditionalGroupHitsAdditional';
  distance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type ChatsWeaviateAdditionalReranker = {
  __typename?: 'ChatsWeaviateAdditionalReranker';
  score?: Maybe<Scalars['Float']['output']>;
};

export type DocumentsWeaviates = {
  __typename?: 'DocumentsWeaviates';
  _additional?: Maybe<DocumentsWeaviatesAdditional>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type DocumentsWeaviatesAdditional = {
  __typename?: 'DocumentsWeaviatesAdditional';
  answer?: Maybe<DocumentsWeaviatesAdditionalAnswer>;
  certainty?: Maybe<Scalars['Float']['output']>;
  classification?: Maybe<DocumentsWeaviatesAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  explainScore?: Maybe<Scalars['String']['output']>;
  featureProjection?: Maybe<DocumentsWeaviatesAdditionalFeatureProjection>;
  group?: Maybe<DocumentsWeaviatesAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars['String']['output']>;
  lastUpdateTimeUnix?: Maybe<Scalars['String']['output']>;
  rerank?: Maybe<Array<Maybe<DocumentsWeaviatesAdditionalReranker>>>;
  score?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};


export type DocumentsWeaviatesAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['Int']['input']>;
  iterations?: InputMaybe<Scalars['Int']['input']>;
  learningRate?: InputMaybe<Scalars['Int']['input']>;
  perplexity?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentsWeaviatesAdditionalRerankArgs = {
  property?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentsWeaviatesAdditionalAnswer = {
  __typename?: 'DocumentsWeaviatesAdditionalAnswer';
  endPosition?: Maybe<Scalars['Int']['output']>;
  hasAnswer?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  startPosition?: Maybe<Scalars['Int']['output']>;
};

export type DocumentsWeaviatesAdditionalClassification = {
  __typename?: 'DocumentsWeaviatesAdditionalClassification';
  basedOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  completed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DocumentsWeaviatesAdditionalFeatureProjection = {
  __typename?: 'DocumentsWeaviatesAdditionalFeatureProjection';
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type DocumentsWeaviatesAdditionalGroup = {
  __typename?: 'DocumentsWeaviatesAdditionalGroup';
  count?: Maybe<Scalars['Int']['output']>;
  groupedBy?: Maybe<DocumentsWeaviatesAdditionalGroupGroupedBy>;
  hits?: Maybe<Array<Maybe<DocumentsWeaviatesAdditionalGroupHits>>>;
  id?: Maybe<Scalars['Int']['output']>;
  maxDistance?: Maybe<Scalars['Float']['output']>;
  minDistance?: Maybe<Scalars['Float']['output']>;
};

export type DocumentsWeaviatesAdditionalGroupGroupedBy = {
  __typename?: 'DocumentsWeaviatesAdditionalGroupGroupedBy';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type DocumentsWeaviatesAdditionalGroupHits = {
  __typename?: 'DocumentsWeaviatesAdditionalGroupHits';
  _additional?: Maybe<DocumentsWeaviatesAdditionalGroupHitsAdditional>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type DocumentsWeaviatesAdditionalGroupHitsAdditional = {
  __typename?: 'DocumentsWeaviatesAdditionalGroupHitsAdditional';
  distance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type DocumentsWeaviatesAdditionalReranker = {
  __typename?: 'DocumentsWeaviatesAdditionalReranker';
  score?: Maybe<Scalars['Float']['output']>;
};

export enum FusionEnum {
  RankedFusion = 'rankedFusion',
  RelativeScoreFusion = 'relativeScoreFusion'
}

/** Specify the property of the class to group by */
export type GetObjectsChatsWeaviateGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int']['input'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int']['input'];
  /**
   * Specify the path from the objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path: Array<InputMaybe<Scalars['String']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsChatsWeaviateGroupInpObj = {
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  type?: InputMaybe<GetObjectsChatsWeaviateGroupInpObjTypeEnum>;
};

export enum GetObjectsChatsWeaviateGroupInpObjTypeEnum {
  Closest = 'closest',
  Merge = 'merge'
}

export type GetObjectsChatsWeaviateHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Hybrid search */
export type GetObjectsChatsWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Algorithm used for fusing results from vector and keyword search */
  fusionType?: InputMaybe<FusionEnum>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetObjectsChatsWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsChatsWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsChatsWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsChatsWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsChatsWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsChatsWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsChatsWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsChatsWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<GetObjectsChatsWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<GetObjectsChatsWeaviateMoveTo>;
};

export type GetObjectsChatsWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsChatsWeaviateSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsChatsWeaviateSortInpObjTypeEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Get',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum GetObjectsChatsWeaviateSortInpObjTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type GetObjectsChatsWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type GetObjectsChatsWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type GetObjectsChatsWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsChatsWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsChatsWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsChatsWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsChatsWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsChatsWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsChatsWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsChatsWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsChatsWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsChatsWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsChatsWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsChatsWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsChatsWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsChatsWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsChatsWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsChatsWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsChatsWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsChatsWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsChatsWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsChatsWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsChatsWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Specify the property of the class to group by */
export type GetObjectsDocumentsWeaviatesGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int']['input'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int']['input'];
  /**
   * Specify the path from the objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path: Array<InputMaybe<Scalars['String']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsDocumentsWeaviatesGroupInpObj = {
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  type?: InputMaybe<GetObjectsDocumentsWeaviatesGroupInpObjTypeEnum>;
};

export enum GetObjectsDocumentsWeaviatesGroupInpObjTypeEnum {
  Closest = 'closest',
  Merge = 'merge'
}

export type GetObjectsDocumentsWeaviatesHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Hybrid search */
export type GetObjectsDocumentsWeaviatesHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Algorithm used for fusing results from vector and keyword search */
  fusionType?: InputMaybe<FusionEnum>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetObjectsDocumentsWeaviatesMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsDocumentsWeaviatesMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsDocumentsWeaviatesMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsDocumentsWeaviatesMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsDocumentsWeaviatesMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsDocumentsWeaviatesMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsDocumentsWeaviatesNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsDocumentsWeaviatesNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<GetObjectsDocumentsWeaviatesMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<GetObjectsDocumentsWeaviatesMoveTo>;
};

export type GetObjectsDocumentsWeaviatesNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsDocumentsWeaviatesSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsDocumentsWeaviatesSortInpObjTypeEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Get',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum GetObjectsDocumentsWeaviatesSortInpObjTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type GetObjectsDocumentsWeaviatesWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type GetObjectsDocumentsWeaviatesWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type GetObjectsDocumentsWeaviatesWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsDocumentsWeaviatesWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsDocumentsWeaviatesWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsDocumentsWeaviatesWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsDocumentsWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsDocumentsWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsDocumentsWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsDocumentsWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsDocumentsWeaviates']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsDocumentsWeaviatesWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsDocumentsWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsDocumentsWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsDocumentsWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsDocumentsWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsDocumentsWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsDocumentsWeaviates']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsDocumentsWeaviatesWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Specify the property of the class to group by */
export type GetObjectsMessagesWeaviateGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int']['input'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int']['input'];
  /**
   * Specify the path from the objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path: Array<InputMaybe<Scalars['String']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMessagesWeaviateGroupInpObj = {
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  type?: InputMaybe<GetObjectsMessagesWeaviateGroupInpObjTypeEnum>;
};

export enum GetObjectsMessagesWeaviateGroupInpObjTypeEnum {
  Closest = 'closest',
  Merge = 'merge'
}

export type GetObjectsMessagesWeaviateHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Hybrid search */
export type GetObjectsMessagesWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Algorithm used for fusing results from vector and keyword search */
  fusionType?: InputMaybe<FusionEnum>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetObjectsMessagesWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsMessagesWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsMessagesWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsMessagesWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsMessagesWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsMessagesWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsMessagesWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMessagesWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<GetObjectsMessagesWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<GetObjectsMessagesWeaviateMoveTo>;
};

export type GetObjectsMessagesWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMessagesWeaviateSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsMessagesWeaviateSortInpObjTypeEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Get',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum GetObjectsMessagesWeaviateSortInpObjTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type GetObjectsMessagesWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type GetObjectsMessagesWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type GetObjectsMessagesWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsMessagesWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsMessagesWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMessagesWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsMessagesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsMessagesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsMessagesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsMessagesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsMessagesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsMessagesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsMessagesWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsMessagesWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsMessagesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsMessagesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsMessagesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsMessagesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsMessagesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsMessagesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsMessagesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsMessagesWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsMessagesWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObj = {
  __typename?: 'GetObjectsObj';
  ChatsWeaviate?: Maybe<Array<Maybe<ChatsWeaviate>>>;
  DocumentsWeaviates?: Maybe<Array<Maybe<DocumentsWeaviates>>>;
  MessagesWeaviate?: Maybe<Array<Maybe<MessagesWeaviate>>>;
  RolesWeaviate?: Maybe<Array<Maybe<RolesWeaviate>>>;
  TemplatesWeaviates?: Maybe<Array<Maybe<TemplatesWeaviates>>>;
};


/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjChatsWeaviateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ask?: InputMaybe<QnATransformersGetObjectsChatsWeaviateAskInpObj>;
  autocut?: InputMaybe<Scalars['Int']['input']>;
  bm25?: InputMaybe<GetObjectsChatsWeaviateHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsChatsWeaviateGroupInpObj>;
  groupBy?: InputMaybe<GetObjectsChatsWeaviateGroupByInpObj>;
  hybrid?: InputMaybe<GetObjectsChatsWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<GetObjectsChatsWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<GetObjectsChatsWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsChatsWeaviateNearVectorInpObj>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsChatsWeaviateSortInpObj>>>;
  where?: InputMaybe<GetObjectsChatsWeaviateWhereInpObj>;
};


/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjDocumentsWeaviatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ask?: InputMaybe<QnATransformersGetObjectsDocumentsWeaviatesAskInpObj>;
  autocut?: InputMaybe<Scalars['Int']['input']>;
  bm25?: InputMaybe<GetObjectsDocumentsWeaviatesHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsDocumentsWeaviatesGroupInpObj>;
  groupBy?: InputMaybe<GetObjectsDocumentsWeaviatesGroupByInpObj>;
  hybrid?: InputMaybe<GetObjectsDocumentsWeaviatesHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<GetObjectsDocumentsWeaviatesNearObjectInpObj>;
  nearText?: InputMaybe<GetObjectsDocumentsWeaviatesNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsDocumentsWeaviatesNearVectorInpObj>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsDocumentsWeaviatesSortInpObj>>>;
  where?: InputMaybe<GetObjectsDocumentsWeaviatesWhereInpObj>;
};


/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjMessagesWeaviateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ask?: InputMaybe<QnATransformersGetObjectsMessagesWeaviateAskInpObj>;
  autocut?: InputMaybe<Scalars['Int']['input']>;
  bm25?: InputMaybe<GetObjectsMessagesWeaviateHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsMessagesWeaviateGroupInpObj>;
  groupBy?: InputMaybe<GetObjectsMessagesWeaviateGroupByInpObj>;
  hybrid?: InputMaybe<GetObjectsMessagesWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<GetObjectsMessagesWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<GetObjectsMessagesWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsMessagesWeaviateNearVectorInpObj>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsMessagesWeaviateSortInpObj>>>;
  where?: InputMaybe<GetObjectsMessagesWeaviateWhereInpObj>;
};


/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjRolesWeaviateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ask?: InputMaybe<QnATransformersGetObjectsRolesWeaviateAskInpObj>;
  autocut?: InputMaybe<Scalars['Int']['input']>;
  bm25?: InputMaybe<GetObjectsRolesWeaviateHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsRolesWeaviateGroupInpObj>;
  groupBy?: InputMaybe<GetObjectsRolesWeaviateGroupByInpObj>;
  hybrid?: InputMaybe<GetObjectsRolesWeaviateHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<GetObjectsRolesWeaviateNearObjectInpObj>;
  nearText?: InputMaybe<GetObjectsRolesWeaviateNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsRolesWeaviateNearVectorInpObj>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsRolesWeaviateSortInpObj>>>;
  where?: InputMaybe<GetObjectsRolesWeaviateWhereInpObj>;
};


/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjTemplatesWeaviatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ask?: InputMaybe<QnATransformersGetObjectsTemplatesWeaviatesAskInpObj>;
  autocut?: InputMaybe<Scalars['Int']['input']>;
  bm25?: InputMaybe<GetObjectsTemplatesWeaviatesHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsTemplatesWeaviatesGroupInpObj>;
  groupBy?: InputMaybe<GetObjectsTemplatesWeaviatesGroupByInpObj>;
  hybrid?: InputMaybe<GetObjectsTemplatesWeaviatesHybridInpObj>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nearObject?: InputMaybe<GetObjectsTemplatesWeaviatesNearObjectInpObj>;
  nearText?: InputMaybe<GetObjectsTemplatesWeaviatesNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsTemplatesWeaviatesNearVectorInpObj>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsTemplatesWeaviatesSortInpObj>>>;
  where?: InputMaybe<GetObjectsTemplatesWeaviatesWhereInpObj>;
};

/** Specify the property of the class to group by */
export type GetObjectsRolesWeaviateGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int']['input'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int']['input'];
  /**
   * Specify the path from the objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path: Array<InputMaybe<Scalars['String']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsRolesWeaviateGroupInpObj = {
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  type?: InputMaybe<GetObjectsRolesWeaviateGroupInpObjTypeEnum>;
};

export enum GetObjectsRolesWeaviateGroupInpObjTypeEnum {
  Closest = 'closest',
  Merge = 'merge'
}

export type GetObjectsRolesWeaviateHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Hybrid search */
export type GetObjectsRolesWeaviateHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Algorithm used for fusing results from vector and keyword search */
  fusionType?: InputMaybe<FusionEnum>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetObjectsRolesWeaviateMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsRolesWeaviateMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsRolesWeaviateMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsRolesWeaviateMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsRolesWeaviateMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsRolesWeaviateMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsRolesWeaviateNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsRolesWeaviateNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<GetObjectsRolesWeaviateMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<GetObjectsRolesWeaviateMoveTo>;
};

export type GetObjectsRolesWeaviateNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsRolesWeaviateSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsRolesWeaviateSortInpObjTypeEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Get',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum GetObjectsRolesWeaviateSortInpObjTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type GetObjectsRolesWeaviateWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type GetObjectsRolesWeaviateWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type GetObjectsRolesWeaviateWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsRolesWeaviateWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsRolesWeaviateWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsRolesWeaviateWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsRolesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsRolesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsRolesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsRolesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsRolesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsRolesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsRolesWeaviate']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsRolesWeaviateWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsRolesWeaviateWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsRolesWeaviateWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsRolesWeaviate']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsRolesWeaviateWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsRolesWeaviate']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsRolesWeaviate']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsRolesWeaviate']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsRolesWeaviate']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsRolesWeaviateWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

/** Specify the property of the class to group by */
export type GetObjectsTemplatesWeaviatesGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int']['input'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int']['input'];
  /**
   * Specify the path from the objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path: Array<InputMaybe<Scalars['String']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsTemplatesWeaviatesGroupInpObj = {
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  type?: InputMaybe<GetObjectsTemplatesWeaviatesGroupInpObjTypeEnum>;
};

export enum GetObjectsTemplatesWeaviatesGroupInpObjTypeEnum {
  Closest = 'closest',
  Merge = 'merge'
}

export type GetObjectsTemplatesWeaviatesHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Hybrid search */
export type GetObjectsTemplatesWeaviatesHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']['input']>;
  /** Algorithm used for fusing results from vector and keyword search */
  fusionType?: InputMaybe<FusionEnum>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetObjectsTemplatesWeaviatesMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsTemplatesWeaviatesMoveAwayFromMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsTemplatesWeaviatesMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsTemplatesWeaviatesMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The force to apply for a particular movements. Must be between 0 and 1 where 0
   * is equivalent to no movement and 1 is equivalent to largest movement possible
   */
  force: Scalars['Float']['input'];
  /** objects */
  objects?: InputMaybe<Array<InputMaybe<GetObjectsTemplatesWeaviatesMoveToMovementObjectsInpObj>>>;
};

/** Movement Object */
export type GetObjectsTemplatesWeaviatesMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetObjectsTemplatesWeaviatesNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsTemplatesWeaviatesNearTextInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  concepts: Array<InputMaybe<Scalars['String']['input']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<GetObjectsTemplatesWeaviatesMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<GetObjectsTemplatesWeaviatesMoveTo>;
};

export type GetObjectsTemplatesWeaviatesNearVectorInpObj = {
  /**
   * Normalized Distance between the result item and the search vector. Normalized
   * to be between 0 (identical vectors) and 1 (perfect opposite).
   */
  certainty?: InputMaybe<Scalars['Float']['input']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']['input']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsTemplatesWeaviatesSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsTemplatesWeaviatesSortInpObjTypeEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Get',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum GetObjectsTemplatesWeaviatesSortInpObjTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type GetObjectsTemplatesWeaviatesWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float']['input'];
};

export type GetObjectsTemplatesWeaviatesWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float']['input'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float']['input'];
};

export type GetObjectsTemplatesWeaviatesWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsTemplatesWeaviatesWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsTemplatesWeaviatesWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsTemplatesWeaviatesWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsTemplatesWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsTemplatesWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsTemplatesWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsTemplatesWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsTemplatesWeaviates']['input']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsTemplatesWeaviatesWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<Array<InputMaybe<GetObjectsTemplatesWeaviatesWhereOperandsInpObj>>>;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsTemplatesWeaviatesWhereOperatorEnum>;
  /**
   * Specify the path from the Objects fields to the property name (e.g. ['Things',
   * 'City', 'population'] leads to the 'population' property of a 'City' object)
   */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['BooleanGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['TextDateGetObjectsTemplatesWeaviates']['input']>;
  /**
   * Specify both geo-coordinates (latitude and longitude as decimals) and a
   * maximum distance from the described coordinates. The search will return any
   * result which is located less than or equal to the specified maximum distance
   * in km away from the specified point.
   */
  valueGeoRange?: InputMaybe<GetObjectsTemplatesWeaviatesWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['IntGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['FloatGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['TextStringGetObjectsTemplatesWeaviates']['input']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['TextGetObjectsTemplatesWeaviates']['input']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsTemplatesWeaviatesWhereOperatorEnum {
  And = 'And',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny',
  Equal = 'Equal',
  GreaterThan = 'GreaterThan',
  GreaterThanEqual = 'GreaterThanEqual',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanEqual = 'LessThanEqual',
  Like = 'Like',
  Not = 'Not',
  NotEqual = 'NotEqual',
  Or = 'Or',
  WithinGeoRange = 'WithinGeoRange'
}

export type GetVectorDataInput = {
  chat_id: Scalars['String']['input'];
  content: Scalars['String']['input'];
};

export type GetVectorDataOutput = {
  __typename?: 'GetVectorDataOutput';
  content: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MakeBetterPromtInput = {
  content: Scalars['String']['input'];
};

export type MakeBetterPromtOutput = {
  __typename?: 'MakeBetterPromtOutput';
  content: Scalars['String']['output'];
};

export type MessagesWeaviate = {
  __typename?: 'MessagesWeaviate';
  _additional?: Maybe<MessagesWeaviateAdditional>;
  chatId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
};

export type MessagesWeaviateAdditional = {
  __typename?: 'MessagesWeaviateAdditional';
  answer?: Maybe<MessagesWeaviateAdditionalAnswer>;
  certainty?: Maybe<Scalars['Float']['output']>;
  classification?: Maybe<MessagesWeaviateAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  explainScore?: Maybe<Scalars['String']['output']>;
  featureProjection?: Maybe<MessagesWeaviateAdditionalFeatureProjection>;
  group?: Maybe<MessagesWeaviateAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars['String']['output']>;
  lastUpdateTimeUnix?: Maybe<Scalars['String']['output']>;
  rerank?: Maybe<Array<Maybe<MessagesWeaviateAdditionalReranker>>>;
  score?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};


export type MessagesWeaviateAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['Int']['input']>;
  iterations?: InputMaybe<Scalars['Int']['input']>;
  learningRate?: InputMaybe<Scalars['Int']['input']>;
  perplexity?: InputMaybe<Scalars['Int']['input']>;
};


export type MessagesWeaviateAdditionalRerankArgs = {
  property?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type MessagesWeaviateAdditionalAnswer = {
  __typename?: 'MessagesWeaviateAdditionalAnswer';
  endPosition?: Maybe<Scalars['Int']['output']>;
  hasAnswer?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  startPosition?: Maybe<Scalars['Int']['output']>;
};

export type MessagesWeaviateAdditionalClassification = {
  __typename?: 'MessagesWeaviateAdditionalClassification';
  basedOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  completed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MessagesWeaviateAdditionalFeatureProjection = {
  __typename?: 'MessagesWeaviateAdditionalFeatureProjection';
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type MessagesWeaviateAdditionalGroup = {
  __typename?: 'MessagesWeaviateAdditionalGroup';
  count?: Maybe<Scalars['Int']['output']>;
  groupedBy?: Maybe<MessagesWeaviateAdditionalGroupGroupedBy>;
  hits?: Maybe<Array<Maybe<MessagesWeaviateAdditionalGroupHits>>>;
  id?: Maybe<Scalars['Int']['output']>;
  maxDistance?: Maybe<Scalars['Float']['output']>;
  minDistance?: Maybe<Scalars['Float']['output']>;
};

export type MessagesWeaviateAdditionalGroupGroupedBy = {
  __typename?: 'MessagesWeaviateAdditionalGroupGroupedBy';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MessagesWeaviateAdditionalGroupHits = {
  __typename?: 'MessagesWeaviateAdditionalGroupHits';
  _additional?: Maybe<MessagesWeaviateAdditionalGroupHitsAdditional>;
  chatId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
};

export type MessagesWeaviateAdditionalGroupHitsAdditional = {
  __typename?: 'MessagesWeaviateAdditionalGroupHitsAdditional';
  distance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type MessagesWeaviateAdditionalReranker = {
  __typename?: 'MessagesWeaviateAdditionalReranker';
  score?: Maybe<Scalars['Float']['output']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateChatsWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateDocumentsWeaviatesAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateMessagesWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateRolesWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateTemplatesWeaviatesAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsChatsWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsDocumentsWeaviatesAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsMessagesWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsRolesWeaviateAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsTemplatesWeaviatesAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Question to be answered */
  question: Scalars['String']['input'];
};

export type RolesWeaviate = {
  __typename?: 'RolesWeaviate';
  _additional?: Maybe<RolesWeaviateAdditional>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RolesWeaviateAdditional = {
  __typename?: 'RolesWeaviateAdditional';
  answer?: Maybe<RolesWeaviateAdditionalAnswer>;
  certainty?: Maybe<Scalars['Float']['output']>;
  classification?: Maybe<RolesWeaviateAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  explainScore?: Maybe<Scalars['String']['output']>;
  featureProjection?: Maybe<RolesWeaviateAdditionalFeatureProjection>;
  group?: Maybe<RolesWeaviateAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars['String']['output']>;
  lastUpdateTimeUnix?: Maybe<Scalars['String']['output']>;
  rerank?: Maybe<Array<Maybe<RolesWeaviateAdditionalReranker>>>;
  score?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};


export type RolesWeaviateAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['Int']['input']>;
  iterations?: InputMaybe<Scalars['Int']['input']>;
  learningRate?: InputMaybe<Scalars['Int']['input']>;
  perplexity?: InputMaybe<Scalars['Int']['input']>;
};


export type RolesWeaviateAdditionalRerankArgs = {
  property?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type RolesWeaviateAdditionalAnswer = {
  __typename?: 'RolesWeaviateAdditionalAnswer';
  endPosition?: Maybe<Scalars['Int']['output']>;
  hasAnswer?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  startPosition?: Maybe<Scalars['Int']['output']>;
};

export type RolesWeaviateAdditionalClassification = {
  __typename?: 'RolesWeaviateAdditionalClassification';
  basedOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  completed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RolesWeaviateAdditionalFeatureProjection = {
  __typename?: 'RolesWeaviateAdditionalFeatureProjection';
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type RolesWeaviateAdditionalGroup = {
  __typename?: 'RolesWeaviateAdditionalGroup';
  count?: Maybe<Scalars['Int']['output']>;
  groupedBy?: Maybe<RolesWeaviateAdditionalGroupGroupedBy>;
  hits?: Maybe<Array<Maybe<RolesWeaviateAdditionalGroupHits>>>;
  id?: Maybe<Scalars['Int']['output']>;
  maxDistance?: Maybe<Scalars['Float']['output']>;
  minDistance?: Maybe<Scalars['Float']['output']>;
};

export type RolesWeaviateAdditionalGroupGroupedBy = {
  __typename?: 'RolesWeaviateAdditionalGroupGroupedBy';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type RolesWeaviateAdditionalGroupHits = {
  __typename?: 'RolesWeaviateAdditionalGroupHits';
  _additional?: Maybe<RolesWeaviateAdditionalGroupHitsAdditional>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RolesWeaviateAdditionalGroupHitsAdditional = {
  __typename?: 'RolesWeaviateAdditionalGroupHitsAdditional';
  distance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type RolesWeaviateAdditionalReranker = {
  __typename?: 'RolesWeaviateAdditionalReranker';
  score?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesWeaviates = {
  __typename?: 'TemplatesWeaviates';
  _additional?: Maybe<TemplatesWeaviatesAdditional>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TemplatesWeaviatesAdditional = {
  __typename?: 'TemplatesWeaviatesAdditional';
  answer?: Maybe<TemplatesWeaviatesAdditionalAnswer>;
  certainty?: Maybe<Scalars['Float']['output']>;
  classification?: Maybe<TemplatesWeaviatesAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  explainScore?: Maybe<Scalars['String']['output']>;
  featureProjection?: Maybe<TemplatesWeaviatesAdditionalFeatureProjection>;
  group?: Maybe<TemplatesWeaviatesAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars['String']['output']>;
  lastUpdateTimeUnix?: Maybe<Scalars['String']['output']>;
  rerank?: Maybe<Array<Maybe<TemplatesWeaviatesAdditionalReranker>>>;
  score?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};


export type TemplatesWeaviatesAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['Int']['input']>;
  iterations?: InputMaybe<Scalars['Int']['input']>;
  learningRate?: InputMaybe<Scalars['Int']['input']>;
  perplexity?: InputMaybe<Scalars['Int']['input']>;
};


export type TemplatesWeaviatesAdditionalRerankArgs = {
  property?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesWeaviatesAdditionalAnswer = {
  __typename?: 'TemplatesWeaviatesAdditionalAnswer';
  endPosition?: Maybe<Scalars['Int']['output']>;
  hasAnswer?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  startPosition?: Maybe<Scalars['Int']['output']>;
};

export type TemplatesWeaviatesAdditionalClassification = {
  __typename?: 'TemplatesWeaviatesAdditionalClassification';
  basedOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  completed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type TemplatesWeaviatesAdditionalFeatureProjection = {
  __typename?: 'TemplatesWeaviatesAdditionalFeatureProjection';
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type TemplatesWeaviatesAdditionalGroup = {
  __typename?: 'TemplatesWeaviatesAdditionalGroup';
  count?: Maybe<Scalars['Int']['output']>;
  groupedBy?: Maybe<TemplatesWeaviatesAdditionalGroupGroupedBy>;
  hits?: Maybe<Array<Maybe<TemplatesWeaviatesAdditionalGroupHits>>>;
  id?: Maybe<Scalars['Int']['output']>;
  maxDistance?: Maybe<Scalars['Float']['output']>;
  minDistance?: Maybe<Scalars['Float']['output']>;
};

export type TemplatesWeaviatesAdditionalGroupGroupedBy = {
  __typename?: 'TemplatesWeaviatesAdditionalGroupGroupedBy';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TemplatesWeaviatesAdditionalGroupHits = {
  __typename?: 'TemplatesWeaviatesAdditionalGroupHits';
  _additional?: Maybe<TemplatesWeaviatesAdditionalGroupHitsAdditional>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TemplatesWeaviatesAdditionalGroupHitsAdditional = {
  __typename?: 'TemplatesWeaviatesAdditionalGroupHitsAdditional';
  distance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  vector?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type TemplatesWeaviatesAdditionalReranker = {
  __typename?: 'TemplatesWeaviatesAdditionalReranker';
  score?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  /** An object relationship */
  provider_type: Provider_Type;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  provider_type?: InputMaybe<Provider_Type_Bool_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Bigint_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Provider_Type_Obj_Rel_Insert_Input>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Provider_Type_Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** columns and relationships of "ai_categories" */
export type Ai_Categories = {
  __typename?: 'ai_categories';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** aggregated selection of "ai_categories" */
export type Ai_Categories_Aggregate = {
  __typename?: 'ai_categories_aggregate';
  aggregate?: Maybe<Ai_Categories_Aggregate_Fields>;
  nodes: Array<Ai_Categories>;
};

/** aggregate fields of "ai_categories" */
export type Ai_Categories_Aggregate_Fields = {
  __typename?: 'ai_categories_aggregate_fields';
  avg?: Maybe<Ai_Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ai_Categories_Max_Fields>;
  min?: Maybe<Ai_Categories_Min_Fields>;
  stddev?: Maybe<Ai_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Ai_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ai_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Ai_Categories_Sum_Fields>;
  var_pop?: Maybe<Ai_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Ai_Categories_Var_Samp_Fields>;
  variance?: Maybe<Ai_Categories_Variance_Fields>;
};


/** aggregate fields of "ai_categories" */
export type Ai_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ai_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ai_Categories_Avg_Fields = {
  __typename?: 'ai_categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ai_categories". All fields are combined with a logical 'AND'. */
export type Ai_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Ai_Categories_Bool_Exp>>;
  _not?: InputMaybe<Ai_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Ai_Categories_Bool_Exp>>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ai_categories" */
export enum Ai_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  AiCategoriesPkey = 'ai_categories_pkey'
}

/** input type for incrementing numeric columns in table "ai_categories" */
export type Ai_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ai_categories" */
export type Ai_Categories_Insert_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ai_Categories_Max_Fields = {
  __typename?: 'ai_categories_max_fields';
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ai_Categories_Min_Fields = {
  __typename?: 'ai_categories_min_fields';
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ai_categories" */
export type Ai_Categories_Mutation_Response = {
  __typename?: 'ai_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ai_Categories>;
};

/** on_conflict condition type for table "ai_categories" */
export type Ai_Categories_On_Conflict = {
  constraint: Ai_Categories_Constraint;
  update_columns?: Array<Ai_Categories_Update_Column>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "ai_categories". */
export type Ai_Categories_Order_By = {
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ai_categories */
export type Ai_Categories_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ai_categories" */
export enum Ai_Categories_Select_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "ai_categories" */
export type Ai_Categories_Set_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Ai_Categories_Stddev_Fields = {
  __typename?: 'ai_categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ai_Categories_Stddev_Pop_Fields = {
  __typename?: 'ai_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ai_Categories_Stddev_Samp_Fields = {
  __typename?: 'ai_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ai_categories" */
export type Ai_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ai_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ai_Categories_Stream_Cursor_Value_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Ai_Categories_Sum_Fields = {
  __typename?: 'ai_categories_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "ai_categories" */
export enum Ai_Categories_Update_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

export type Ai_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ai_Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ai_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ai_Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ai_Categories_Var_Pop_Fields = {
  __typename?: 'ai_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ai_Categories_Var_Samp_Fields = {
  __typename?: 'ai_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ai_Categories_Variance_Fields = {
  __typename?: 'ai_categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "ai_models" */
export type Ai_Models = {
  __typename?: 'ai_models';
  id: Scalars['uuid']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

/** aggregated selection of "ai_models" */
export type Ai_Models_Aggregate = {
  __typename?: 'ai_models_aggregate';
  aggregate?: Maybe<Ai_Models_Aggregate_Fields>;
  nodes: Array<Ai_Models>;
};

/** aggregate fields of "ai_models" */
export type Ai_Models_Aggregate_Fields = {
  __typename?: 'ai_models_aggregate_fields';
  avg?: Maybe<Ai_Models_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ai_Models_Max_Fields>;
  min?: Maybe<Ai_Models_Min_Fields>;
  stddev?: Maybe<Ai_Models_Stddev_Fields>;
  stddev_pop?: Maybe<Ai_Models_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ai_Models_Stddev_Samp_Fields>;
  sum?: Maybe<Ai_Models_Sum_Fields>;
  var_pop?: Maybe<Ai_Models_Var_Pop_Fields>;
  var_samp?: Maybe<Ai_Models_Var_Samp_Fields>;
  variance?: Maybe<Ai_Models_Variance_Fields>;
};


/** aggregate fields of "ai_models" */
export type Ai_Models_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ai_Models_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ai_Models_Avg_Fields = {
  __typename?: 'ai_models_avg_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ai_models". All fields are combined with a logical 'AND'. */
export type Ai_Models_Bool_Exp = {
  _and?: InputMaybe<Array<Ai_Models_Bool_Exp>>;
  _not?: InputMaybe<Ai_Models_Bool_Exp>;
  _or?: InputMaybe<Array<Ai_Models_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ai_models" */
export enum Ai_Models_Constraint {
  /** unique or primary key constraint on columns "id" */
  AiModelsPkey = 'ai_models_pkey'
}

/** input type for incrementing numeric columns in table "ai_models" */
export type Ai_Models_Inc_Input = {
  level?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ai_models" */
export type Ai_Models_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ai_Models_Max_Fields = {
  __typename?: 'ai_models_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ai_Models_Min_Fields = {
  __typename?: 'ai_models_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ai_models" */
export type Ai_Models_Mutation_Response = {
  __typename?: 'ai_models_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ai_Models>;
};

/** on_conflict condition type for table "ai_models" */
export type Ai_Models_On_Conflict = {
  constraint: Ai_Models_Constraint;
  update_columns?: Array<Ai_Models_Update_Column>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};

/** Ordering options when selecting data from "ai_models". */
export type Ai_Models_Order_By = {
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ai_models */
export type Ai_Models_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "ai_models" */
export enum Ai_Models_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ai_models" */
export type Ai_Models_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Ai_Models_Stddev_Fields = {
  __typename?: 'ai_models_stddev_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ai_Models_Stddev_Pop_Fields = {
  __typename?: 'ai_models_stddev_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ai_Models_Stddev_Samp_Fields = {
  __typename?: 'ai_models_stddev_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ai_models" */
export type Ai_Models_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ai_Models_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ai_Models_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Ai_Models_Sum_Fields = {
  __typename?: 'ai_models_sum_fields';
  level?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "ai_models" */
export enum Ai_Models_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

export type Ai_Models_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ai_Models_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ai_Models_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ai_Models_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ai_Models_Var_Pop_Fields = {
  __typename?: 'ai_models_var_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ai_Models_Var_Samp_Fields = {
  __typename?: 'ai_models_var_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ai_Models_Variance_Fields = {
  __typename?: 'ai_models_variance_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** columns and relationships of "chats" */
export type Chats = {
  __typename?: 'chats';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  model?: Maybe<Scalars['String']['output']>;
  system_promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "chats" */
export type ChatsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "chats" */
export type ChatsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** aggregated selection of "chats" */
export type Chats_Aggregate = {
  __typename?: 'chats_aggregate';
  aggregate?: Maybe<Chats_Aggregate_Fields>;
  nodes: Array<Chats>;
};

export type Chats_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chats_Aggregate_Bool_Exp_Count>;
};

export type Chats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chats_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chats" */
export type Chats_Aggregate_Fields = {
  __typename?: 'chats_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Chats_Max_Fields>;
  min?: Maybe<Chats_Min_Fields>;
};


/** aggregate fields of "chats" */
export type Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chats" */
export type Chats_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chats_Max_Order_By>;
  min?: InputMaybe<Chats_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chats" */
export type Chats_Arr_Rel_Insert_Input = {
  data: Array<Chats_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chats". All fields are combined with a logical 'AND'. */
export type Chats_Bool_Exp = {
  _and?: InputMaybe<Array<Chats_Bool_Exp>>;
  _not?: InputMaybe<Chats_Bool_Exp>;
  _or?: InputMaybe<Array<Chats_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  system_promt?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chats" */
export enum Chats_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatsPkey = 'chats_pkey',
  /** unique or primary key constraint on columns "id" */
  ChatsUidKey = 'chats_uid_key'
}

/** input type for inserting data into table "chats" */
export type Chats_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  model?: InputMaybe<Scalars['String']['input']>;
  system_promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Chats_Max_Fields = {
  __typename?: 'chats_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  system_promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "chats" */
export type Chats_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  system_promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chats_Min_Fields = {
  __typename?: 'chats_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  system_promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "chats" */
export type Chats_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  system_promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chats" */
export type Chats_Mutation_Response = {
  __typename?: 'chats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chats>;
};

/** input type for inserting object relation for remote table "chats" */
export type Chats_Obj_Rel_Insert_Input = {
  data: Chats_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};

/** on_conflict condition type for table "chats" */
export type Chats_On_Conflict = {
  constraint: Chats_Constraint;
  update_columns?: Array<Chats_Update_Column>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "chats". */
export type Chats_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  model?: InputMaybe<Order_By>;
  system_promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chats */
export type Chats_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "chats" */
export enum Chats_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  SystemPromt = 'system_promt',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "chats" */
export type Chats_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  system_promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "chats" */
export type Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chats_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  system_promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "chats" */
export enum Chats_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  SystemPromt = 'system_promt',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

export type Chats_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chats_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "directus_files" */
export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['bigint']['output']>;
  folder?: Maybe<Scalars['uuid']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['json']['output']>;
  modified_by?: Maybe<Scalars['uuid']['output']>;
  modified_on: Scalars['timestamptz']['output'];
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  templates: Array<Templates>;
  /** An aggregate relationship */
  templates_aggregate: Templates_Aggregate;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['uuid']['output']>;
  uploaded_on: Scalars['timestamptz']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "directus_files" */
export type Directus_FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "directus_files" */
export type Directus_FilesRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "directus_files" */
export type Directus_FilesRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "directus_files" */
export type Directus_FilesTemplatesArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


/** columns and relationships of "directus_files" */
export type Directus_FilesTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};

/** aggregated selection of "directus_files" */
export type Directus_Files_Aggregate = {
  __typename?: 'directus_files_aggregate';
  aggregate?: Maybe<Directus_Files_Aggregate_Fields>;
  nodes: Array<Directus_Files>;
};

/** aggregate fields of "directus_files" */
export type Directus_Files_Aggregate_Fields = {
  __typename?: 'directus_files_aggregate_fields';
  avg?: Maybe<Directus_Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Directus_Files_Max_Fields>;
  min?: Maybe<Directus_Files_Min_Fields>;
  stddev?: Maybe<Directus_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Directus_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Directus_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Directus_Files_Sum_Fields>;
  var_pop?: Maybe<Directus_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Directus_Files_Var_Samp_Fields>;
  variance?: Maybe<Directus_Files_Variance_Fields>;
};


/** aggregate fields of "directus_files" */
export type Directus_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Directus_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Directus_Files_Avg_Fields = {
  __typename?: 'directus_files_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "directus_files". All fields are combined with a logical 'AND'. */
export type Directus_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Directus_Files_Bool_Exp>>;
  _not?: InputMaybe<Directus_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Directus_Files_Bool_Exp>>;
  charset?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  embed?: InputMaybe<String_Comparison_Exp>;
  filename_disk?: InputMaybe<String_Comparison_Exp>;
  filename_download?: InputMaybe<String_Comparison_Exp>;
  filesize?: InputMaybe<Bigint_Comparison_Exp>;
  folder?: InputMaybe<Uuid_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Json_Comparison_Exp>;
  modified_by?: InputMaybe<Uuid_Comparison_Exp>;
  modified_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  roles?: InputMaybe<Roles_Bool_Exp>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Bool_Exp>;
  storage?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  templates?: InputMaybe<Templates_Bool_Exp>;
  templates_aggregate?: InputMaybe<Templates_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uploaded_by?: InputMaybe<Uuid_Comparison_Exp>;
  uploaded_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "directus_files" */
export enum Directus_Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  DirectusFilesPkey = 'directus_files_pkey'
}

/** input type for incrementing numeric columns in table "directus_files" */
export type Directus_Files_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  filesize?: InputMaybe<Scalars['bigint']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "directus_files" */
export type Directus_Files_Insert_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['bigint']['input']>;
  folder?: InputMaybe<Scalars['uuid']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['json']['input']>;
  modified_by?: InputMaybe<Scalars['uuid']['input']>;
  modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  roles?: InputMaybe<Roles_Arr_Rel_Insert_Input>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  templates?: InputMaybe<Templates_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Scalars['uuid']['input']>;
  uploaded_on?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Directus_Files_Max_Fields = {
  __typename?: 'directus_files_max_fields';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['bigint']['output']>;
  folder?: Maybe<Scalars['uuid']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modified_by?: Maybe<Scalars['uuid']['output']>;
  modified_on?: Maybe<Scalars['timestamptz']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['uuid']['output']>;
  uploaded_on?: Maybe<Scalars['timestamptz']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Directus_Files_Min_Fields = {
  __typename?: 'directus_files_min_fields';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['bigint']['output']>;
  folder?: Maybe<Scalars['uuid']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modified_by?: Maybe<Scalars['uuid']['output']>;
  modified_on?: Maybe<Scalars['timestamptz']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['uuid']['output']>;
  uploaded_on?: Maybe<Scalars['timestamptz']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "directus_files" */
export type Directus_Files_Mutation_Response = {
  __typename?: 'directus_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Directus_Files>;
};

/** input type for inserting object relation for remote table "directus_files" */
export type Directus_Files_Obj_Rel_Insert_Input = {
  data: Directus_Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Directus_Files_On_Conflict>;
};

/** on_conflict condition type for table "directus_files" */
export type Directus_Files_On_Conflict = {
  constraint: Directus_Files_Constraint;
  update_columns?: Array<Directus_Files_Update_Column>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "directus_files". */
export type Directus_Files_Order_By = {
  charset?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  embed?: InputMaybe<Order_By>;
  filename_disk?: InputMaybe<Order_By>;
  filename_download?: InputMaybe<Order_By>;
  filesize?: InputMaybe<Order_By>;
  folder?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  modified_by?: InputMaybe<Order_By>;
  modified_on?: InputMaybe<Order_By>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Order_By>;
  storage?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  templates_aggregate?: InputMaybe<Templates_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uploaded_by?: InputMaybe<Order_By>;
  uploaded_on?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: directus_files */
export type Directus_Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "directus_files" */
export enum Directus_Files_Select_Column {
  /** column name */
  Charset = 'charset',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Embed = 'embed',
  /** column name */
  FilenameDisk = 'filename_disk',
  /** column name */
  FilenameDownload = 'filename_download',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Folder = 'folder',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ModifiedBy = 'modified_by',
  /** column name */
  ModifiedOn = 'modified_on',
  /** column name */
  Storage = 'storage',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UploadedBy = 'uploaded_by',
  /** column name */
  UploadedOn = 'uploaded_on',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "directus_files" */
export type Directus_Files_Set_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['bigint']['input']>;
  folder?: InputMaybe<Scalars['uuid']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['json']['input']>;
  modified_by?: InputMaybe<Scalars['uuid']['input']>;
  modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Scalars['uuid']['input']>;
  uploaded_on?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Directus_Files_Stddev_Fields = {
  __typename?: 'directus_files_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Directus_Files_Stddev_Pop_Fields = {
  __typename?: 'directus_files_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Directus_Files_Stddev_Samp_Fields = {
  __typename?: 'directus_files_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "directus_files" */
export type Directus_Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Directus_Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Directus_Files_Stream_Cursor_Value_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['bigint']['input']>;
  folder?: InputMaybe<Scalars['uuid']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['json']['input']>;
  modified_by?: InputMaybe<Scalars['uuid']['input']>;
  modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Scalars['uuid']['input']>;
  uploaded_on?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Directus_Files_Sum_Fields = {
  __typename?: 'directus_files_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  filesize?: Maybe<Scalars['bigint']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "directus_files" */
export enum Directus_Files_Update_Column {
  /** column name */
  Charset = 'charset',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Embed = 'embed',
  /** column name */
  FilenameDisk = 'filename_disk',
  /** column name */
  FilenameDownload = 'filename_download',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Folder = 'folder',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ModifiedBy = 'modified_by',
  /** column name */
  ModifiedOn = 'modified_on',
  /** column name */
  Storage = 'storage',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UploadedBy = 'uploaded_by',
  /** column name */
  UploadedOn = 'uploaded_on',
  /** column name */
  Width = 'width'
}

export type Directus_Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Directus_Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Directus_Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Directus_Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Directus_Files_Var_Pop_Fields = {
  __typename?: 'directus_files_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Directus_Files_Var_Samp_Fields = {
  __typename?: 'directus_files_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Directus_Files_Variance_Fields = {
  __typename?: 'directus_files_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "directus_users" */
export type Directus_Users = {
  __typename?: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['json']['output']>;
  avatar?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  role?: Maybe<Scalars['uuid']['output']>;
  status: Scalars['String']['output'];
  tags?: Maybe<Scalars['json']['output']>;
  tfa_secret?: Maybe<Scalars['String']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['json']['output']>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['json']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "directus_users" */
export type Directus_UsersAuth_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "directus_users" */
export type Directus_UsersTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "directus_users" */
export type Directus_UsersTheme_Dark_OverridesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "directus_users" */
export type Directus_UsersTheme_Light_OverridesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "directus_users" */
export type Directus_Users_Aggregate = {
  __typename?: 'directus_users_aggregate';
  aggregate?: Maybe<Directus_Users_Aggregate_Fields>;
  nodes: Array<Directus_Users>;
};

/** aggregate fields of "directus_users" */
export type Directus_Users_Aggregate_Fields = {
  __typename?: 'directus_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Directus_Users_Max_Fields>;
  min?: Maybe<Directus_Users_Min_Fields>;
};


/** aggregate fields of "directus_users" */
export type Directus_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Directus_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "directus_users". All fields are combined with a logical 'AND'. */
export type Directus_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Directus_Users_Bool_Exp>>;
  _not?: InputMaybe<Directus_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Directus_Users_Bool_Exp>>;
  appearance?: InputMaybe<String_Comparison_Exp>;
  auth_data?: InputMaybe<Json_Comparison_Exp>;
  avatar?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_notifications?: InputMaybe<Boolean_Comparison_Exp>;
  external_identifier?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  last_access?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_page?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Json_Comparison_Exp>;
  tfa_secret?: InputMaybe<String_Comparison_Exp>;
  theme_dark?: InputMaybe<String_Comparison_Exp>;
  theme_dark_overrides?: InputMaybe<Json_Comparison_Exp>;
  theme_light?: InputMaybe<String_Comparison_Exp>;
  theme_light_overrides?: InputMaybe<Json_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "directus_users" */
export enum Directus_Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  DirectusUsersEmailUnique = 'directus_users_email_unique',
  /** unique or primary key constraint on columns "external_identifier" */
  DirectusUsersExternalIdentifierUnique = 'directus_users_external_identifier_unique',
  /** unique or primary key constraint on columns "id" */
  DirectusUsersPkey = 'directus_users_pkey',
  /** unique or primary key constraint on columns "token" */
  DirectusUsersTokenUnique = 'directus_users_token_unique'
}

/** input type for inserting data into table "directus_users" */
export type Directus_Users_Insert_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['json']['input']>;
  avatar?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['json']['input']>;
  tfa_secret?: InputMaybe<Scalars['String']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['json']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Directus_Users_Max_Fields = {
  __typename?: 'directus_users_max_fields';
  appearance?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['String']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_light?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Directus_Users_Min_Fields = {
  __typename?: 'directus_users_min_fields';
  appearance?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['String']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_light?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "directus_users" */
export type Directus_Users_Mutation_Response = {
  __typename?: 'directus_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Directus_Users>;
};

/** on_conflict condition type for table "directus_users" */
export type Directus_Users_On_Conflict = {
  constraint: Directus_Users_Constraint;
  update_columns?: Array<Directus_Users_Update_Column>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "directus_users". */
export type Directus_Users_Order_By = {
  appearance?: InputMaybe<Order_By>;
  auth_data?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_notifications?: InputMaybe<Order_By>;
  external_identifier?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  last_access?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_page?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  tfa_secret?: InputMaybe<Order_By>;
  theme_dark?: InputMaybe<Order_By>;
  theme_dark_overrides?: InputMaybe<Order_By>;
  theme_light?: InputMaybe<Order_By>;
  theme_light_overrides?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: directus_users */
export type Directus_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "directus_users" */
export enum Directus_Users_Select_Column {
  /** column name */
  Appearance = 'appearance',
  /** column name */
  AuthData = 'auth_data',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  EmailNotifications = 'email_notifications',
  /** column name */
  ExternalIdentifier = 'external_identifier',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  LastAccess = 'last_access',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastPage = 'last_page',
  /** column name */
  Location = 'location',
  /** column name */
  Password = 'password',
  /** column name */
  Provider = 'provider',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TfaSecret = 'tfa_secret',
  /** column name */
  ThemeDark = 'theme_dark',
  /** column name */
  ThemeDarkOverrides = 'theme_dark_overrides',
  /** column name */
  ThemeLight = 'theme_light',
  /** column name */
  ThemeLightOverrides = 'theme_light_overrides',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "directus_users" */
export type Directus_Users_Set_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['json']['input']>;
  avatar?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['json']['input']>;
  tfa_secret?: InputMaybe<Scalars['String']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['json']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "directus_users" */
export type Directus_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Directus_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Directus_Users_Stream_Cursor_Value_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['json']['input']>;
  avatar?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['json']['input']>;
  tfa_secret?: InputMaybe<Scalars['String']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['json']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "directus_users" */
export enum Directus_Users_Update_Column {
  /** column name */
  Appearance = 'appearance',
  /** column name */
  AuthData = 'auth_data',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  EmailNotifications = 'email_notifications',
  /** column name */
  ExternalIdentifier = 'external_identifier',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  LastAccess = 'last_access',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastPage = 'last_page',
  /** column name */
  Location = 'location',
  /** column name */
  Password = 'password',
  /** column name */
  Provider = 'provider',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TfaSecret = 'tfa_secret',
  /** column name */
  ThemeDark = 'theme_dark',
  /** column name */
  ThemeDarkOverrides = 'theme_dark_overrides',
  /** column name */
  ThemeLight = 'theme_light',
  /** column name */
  ThemeLightOverrides = 'theme_light_overrides',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token'
}

export type Directus_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Directus_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Directus_Users_Bool_Exp;
};

/** columns and relationships of "documents" */
export type Documents = {
  __typename?: 'documents';
  blocks?: Maybe<Scalars['json']['output']>;
  date_created?: Maybe<Scalars['timestamptz']['output']>;
  date_updated?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  time?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "documents" */
export type DocumentsBlocksArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
  __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

export type Documents_Aggregate_Bool_Exp = {
  count?: InputMaybe<Documents_Aggregate_Bool_Exp_Count>;
};

export type Documents_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Documents_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
  __typename?: 'documents_aggregate_fields';
  avg?: Maybe<Documents_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
  stddev?: Maybe<Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Documents_Sum_Fields>;
  var_pop?: Maybe<Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Documents_Var_Samp_Fields>;
  variance?: Maybe<Documents_Variance_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  avg?: InputMaybe<Documents_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Documents_Max_Order_By>;
  min?: InputMaybe<Documents_Min_Order_By>;
  stddev?: InputMaybe<Documents_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Documents_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Documents_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Documents_Sum_Order_By>;
  var_pop?: InputMaybe<Documents_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Documents_Var_Samp_Order_By>;
  variance?: InputMaybe<Documents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "documents" */
export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** aggregate avg on columns */
export type Documents_Avg_Fields = {
  __typename?: 'documents_avg_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "documents" */
export type Documents_Avg_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: InputMaybe<Array<Documents_Bool_Exp>>;
  _not?: InputMaybe<Documents_Bool_Exp>;
  _or?: InputMaybe<Array<Documents_Bool_Exp>>;
  blocks?: InputMaybe<Json_Comparison_Exp>;
  date_created?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_updated?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  time?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint on columns "id" */
  DocumentsPkey = 'documents_pkey'
}

/** input type for incrementing numeric columns in table "documents" */
export type Documents_Inc_Input = {
  time?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  blocks?: InputMaybe<Scalars['json']['input']>;
  date_created?: InputMaybe<Scalars['timestamptz']['input']>;
  date_updated?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['bigint']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
  __typename?: 'documents_max_fields';
  date_created?: Maybe<Scalars['timestamptz']['output']>;
  date_updated?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  date_created?: InputMaybe<Order_By>;
  date_updated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
  __typename?: 'documents_min_fields';
  date_created?: Maybe<Scalars['timestamptz']['output']>;
  date_updated?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  date_created?: InputMaybe<Order_By>;
  date_updated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
  __typename?: 'documents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Documents>;
};

/** on_conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns?: Array<Documents_Update_Column>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "documents". */
export type Documents_Order_By = {
  blocks?: InputMaybe<Order_By>;
  date_created?: InputMaybe<Order_By>;
  date_updated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documents */
export type Documents_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  Blocks = 'blocks',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DateUpdated = 'date_updated',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Time = 'time',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  blocks?: InputMaybe<Scalars['json']['input']>;
  date_created?: InputMaybe<Scalars['timestamptz']['input']>;
  date_updated?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Documents_Stddev_Fields = {
  __typename?: 'documents_stddev_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "documents" */
export type Documents_Stddev_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Documents_Stddev_Pop_Fields = {
  __typename?: 'documents_stddev_pop_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "documents" */
export type Documents_Stddev_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Documents_Stddev_Samp_Fields = {
  __typename?: 'documents_stddev_samp_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "documents" */
export type Documents_Stddev_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "documents" */
export type Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Documents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Documents_Stream_Cursor_Value_Input = {
  blocks?: InputMaybe<Scalars['json']['input']>;
  date_created?: InputMaybe<Scalars['timestamptz']['input']>;
  date_updated?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Documents_Sum_Fields = {
  __typename?: 'documents_sum_fields';
  time?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "documents" */
export type Documents_Sum_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  Blocks = 'blocks',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DateUpdated = 'date_updated',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Time = 'time',
  /** column name */
  UserId = 'userId'
}

export type Documents_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Documents_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Documents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Documents_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Documents_Var_Pop_Fields = {
  __typename?: 'documents_var_pop_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "documents" */
export type Documents_Var_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Documents_Var_Samp_Fields = {
  __typename?: 'documents_var_samp_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "documents" */
export type Documents_Var_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Documents_Variance_Fields = {
  __typename?: 'documents_variance_fields';
  time?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "documents" */
export type Documents_Variance_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  chatId: Scalars['uuid']['output'];
  /** An object relationship */
  chats?: Maybe<Chats>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  data?: Maybe<Scalars['json']['output']>;
  id: Scalars['uuid']['output'];
  role?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "messages" */
export type MessagesDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Messages_Aggregate_Bool_Exp_Count>;
};

export type Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  chatId?: InputMaybe<Uuid_Comparison_Exp>;
  chats?: InputMaybe<Chats_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  chats?: InputMaybe<Chats_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  chatId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  chatId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  chatId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  chatId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  chatId?: InputMaybe<Order_By>;
  chats?: InputMaybe<Chats_Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

export type Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "ai_categories" */
  delete_ai_categories?: Maybe<Ai_Categories_Mutation_Response>;
  /** delete single row from the table: "ai_categories" */
  delete_ai_categories_by_pk?: Maybe<Ai_Categories>;
  /** delete data from the table: "ai_models" */
  delete_ai_models?: Maybe<Ai_Models_Mutation_Response>;
  /** delete single row from the table: "ai_models" */
  delete_ai_models_by_pk?: Maybe<Ai_Models>;
  /** delete data from the table: "chats" */
  delete_chats?: Maybe<Chats_Mutation_Response>;
  /** delete single row from the table: "chats" */
  delete_chats_by_pk?: Maybe<Chats>;
  /** delete data from the table: "directus_files" */
  delete_directus_files?: Maybe<Directus_Files_Mutation_Response>;
  /** delete single row from the table: "directus_files" */
  delete_directus_files_by_pk?: Maybe<Directus_Files>;
  /** delete data from the table: "directus_users" */
  delete_directus_users?: Maybe<Directus_Users_Mutation_Response>;
  /** delete single row from the table: "directus_users" */
  delete_directus_users_by_pk?: Maybe<Directus_Users>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete single row from the table: "documents" */
  delete_documents_by_pk?: Maybe<Documents>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "password_reset_tokens" */
  delete_password_reset_tokens?: Maybe<Password_Reset_Tokens_Mutation_Response>;
  /** delete single row from the table: "password_reset_tokens" */
  delete_password_reset_tokens_by_pk?: Maybe<Password_Reset_Tokens>;
  /** delete data from the table: "payment_history" */
  delete_payment_history?: Maybe<Payment_History_Mutation_Response>;
  /** delete single row from the table: "payment_history" */
  delete_payment_history_by_pk?: Maybe<Payment_History>;
  /** delete data from the table: "plan_categories" */
  delete_plan_categories?: Maybe<Plan_Categories_Mutation_Response>;
  /** delete single row from the table: "plan_categories" */
  delete_plan_categories_by_pk?: Maybe<Plan_Categories>;
  /** delete data from the table: "plans" */
  delete_plans?: Maybe<Plans_Mutation_Response>;
  /** delete single row from the table: "plans" */
  delete_plans_by_pk?: Maybe<Plans>;
  /** delete data from the table: "profile_categories" */
  delete_profile_categories?: Maybe<Profile_Categories_Mutation_Response>;
  /** delete single row from the table: "profile_categories" */
  delete_profile_categories_by_pk?: Maybe<Profile_Categories>;
  /** delete data from the table: "provider_type" */
  delete_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** delete single row from the table: "provider_type" */
  delete_provider_type_by_pk?: Maybe<Provider_Type>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "template_categories" */
  delete_template_categories?: Maybe<Template_Categories_Mutation_Response>;
  /** delete single row from the table: "template_categories" */
  delete_template_categories_by_pk?: Maybe<Template_Categories>;
  /** delete data from the table: "template_tags" */
  delete_template_tags?: Maybe<Template_Tags_Mutation_Response>;
  /** delete single row from the table: "template_tags" */
  delete_template_tags_by_pk?: Maybe<Template_Tags>;
  /** delete data from the table: "templates" */
  delete_templates?: Maybe<Templates_Mutation_Response>;
  /** delete single row from the table: "templates" */
  delete_templates_by_pk?: Maybe<Templates>;
  /** delete data from the table: "tokens_history" */
  delete_tokens_history?: Maybe<Tokens_History_Mutation_Response>;
  /** delete single row from the table: "tokens_history" */
  delete_tokens_history_by_pk?: Maybe<Tokens_History>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** delete data from the table: "wallets" */
  delete_wallets?: Maybe<Wallets_Mutation_Response>;
  /** delete single row from the table: "wallets" */
  delete_wallets_by_pk?: Maybe<Wallets>;
  /** get_data_from_db */
  getVectorData?: Maybe<GetVectorDataOutput>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "ai_categories" */
  insert_ai_categories?: Maybe<Ai_Categories_Mutation_Response>;
  /** insert a single row into the table: "ai_categories" */
  insert_ai_categories_one?: Maybe<Ai_Categories>;
  /** insert data into the table: "ai_models" */
  insert_ai_models?: Maybe<Ai_Models_Mutation_Response>;
  /** insert a single row into the table: "ai_models" */
  insert_ai_models_one?: Maybe<Ai_Models>;
  /** insert data into the table: "chats" */
  insert_chats?: Maybe<Chats_Mutation_Response>;
  /** insert a single row into the table: "chats" */
  insert_chats_one?: Maybe<Chats>;
  /** insert data into the table: "directus_files" */
  insert_directus_files?: Maybe<Directus_Files_Mutation_Response>;
  /** insert a single row into the table: "directus_files" */
  insert_directus_files_one?: Maybe<Directus_Files>;
  /** insert data into the table: "directus_users" */
  insert_directus_users?: Maybe<Directus_Users_Mutation_Response>;
  /** insert a single row into the table: "directus_users" */
  insert_directus_users_one?: Maybe<Directus_Users>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert a single row into the table: "documents" */
  insert_documents_one?: Maybe<Documents>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "password_reset_tokens" */
  insert_password_reset_tokens?: Maybe<Password_Reset_Tokens_Mutation_Response>;
  /** insert a single row into the table: "password_reset_tokens" */
  insert_password_reset_tokens_one?: Maybe<Password_Reset_Tokens>;
  /** insert data into the table: "payment_history" */
  insert_payment_history?: Maybe<Payment_History_Mutation_Response>;
  /** insert a single row into the table: "payment_history" */
  insert_payment_history_one?: Maybe<Payment_History>;
  /** insert data into the table: "plan_categories" */
  insert_plan_categories?: Maybe<Plan_Categories_Mutation_Response>;
  /** insert a single row into the table: "plan_categories" */
  insert_plan_categories_one?: Maybe<Plan_Categories>;
  /** insert data into the table: "plans" */
  insert_plans?: Maybe<Plans_Mutation_Response>;
  /** insert a single row into the table: "plans" */
  insert_plans_one?: Maybe<Plans>;
  /** insert data into the table: "profile_categories" */
  insert_profile_categories?: Maybe<Profile_Categories_Mutation_Response>;
  /** insert a single row into the table: "profile_categories" */
  insert_profile_categories_one?: Maybe<Profile_Categories>;
  /** insert data into the table: "provider_type" */
  insert_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** insert a single row into the table: "provider_type" */
  insert_provider_type_one?: Maybe<Provider_Type>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "template_categories" */
  insert_template_categories?: Maybe<Template_Categories_Mutation_Response>;
  /** insert a single row into the table: "template_categories" */
  insert_template_categories_one?: Maybe<Template_Categories>;
  /** insert data into the table: "template_tags" */
  insert_template_tags?: Maybe<Template_Tags_Mutation_Response>;
  /** insert a single row into the table: "template_tags" */
  insert_template_tags_one?: Maybe<Template_Tags>;
  /** insert data into the table: "templates" */
  insert_templates?: Maybe<Templates_Mutation_Response>;
  /** insert a single row into the table: "templates" */
  insert_templates_one?: Maybe<Templates>;
  /** insert data into the table: "tokens_history" */
  insert_tokens_history?: Maybe<Tokens_History_Mutation_Response>;
  /** insert a single row into the table: "tokens_history" */
  insert_tokens_history_one?: Maybe<Tokens_History>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** insert data into the table: "wallets" */
  insert_wallets?: Maybe<Wallets_Mutation_Response>;
  /** insert a single row into the table: "wallets" */
  insert_wallets_one?: Maybe<Wallets>;
  /** better promt */
  makeBetterPromt?: Maybe<MakeBetterPromtOutput>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "ai_categories" */
  update_ai_categories?: Maybe<Ai_Categories_Mutation_Response>;
  /** update single row of the table: "ai_categories" */
  update_ai_categories_by_pk?: Maybe<Ai_Categories>;
  /** update multiples rows of table: "ai_categories" */
  update_ai_categories_many?: Maybe<Array<Maybe<Ai_Categories_Mutation_Response>>>;
  /** update data of the table: "ai_models" */
  update_ai_models?: Maybe<Ai_Models_Mutation_Response>;
  /** update single row of the table: "ai_models" */
  update_ai_models_by_pk?: Maybe<Ai_Models>;
  /** update multiples rows of table: "ai_models" */
  update_ai_models_many?: Maybe<Array<Maybe<Ai_Models_Mutation_Response>>>;
  /** update data of the table: "chats" */
  update_chats?: Maybe<Chats_Mutation_Response>;
  /** update single row of the table: "chats" */
  update_chats_by_pk?: Maybe<Chats>;
  /** update multiples rows of table: "chats" */
  update_chats_many?: Maybe<Array<Maybe<Chats_Mutation_Response>>>;
  /** update data of the table: "directus_files" */
  update_directus_files?: Maybe<Directus_Files_Mutation_Response>;
  /** update single row of the table: "directus_files" */
  update_directus_files_by_pk?: Maybe<Directus_Files>;
  /** update multiples rows of table: "directus_files" */
  update_directus_files_many?: Maybe<Array<Maybe<Directus_Files_Mutation_Response>>>;
  /** update data of the table: "directus_users" */
  update_directus_users?: Maybe<Directus_Users_Mutation_Response>;
  /** update single row of the table: "directus_users" */
  update_directus_users_by_pk?: Maybe<Directus_Users>;
  /** update multiples rows of table: "directus_users" */
  update_directus_users_many?: Maybe<Array<Maybe<Directus_Users_Mutation_Response>>>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update single row of the table: "documents" */
  update_documents_by_pk?: Maybe<Documents>;
  /** update multiples rows of table: "documents" */
  update_documents_many?: Maybe<Array<Maybe<Documents_Mutation_Response>>>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "password_reset_tokens" */
  update_password_reset_tokens?: Maybe<Password_Reset_Tokens_Mutation_Response>;
  /** update single row of the table: "password_reset_tokens" */
  update_password_reset_tokens_by_pk?: Maybe<Password_Reset_Tokens>;
  /** update multiples rows of table: "password_reset_tokens" */
  update_password_reset_tokens_many?: Maybe<Array<Maybe<Password_Reset_Tokens_Mutation_Response>>>;
  /** update data of the table: "payment_history" */
  update_payment_history?: Maybe<Payment_History_Mutation_Response>;
  /** update single row of the table: "payment_history" */
  update_payment_history_by_pk?: Maybe<Payment_History>;
  /** update multiples rows of table: "payment_history" */
  update_payment_history_many?: Maybe<Array<Maybe<Payment_History_Mutation_Response>>>;
  /** update data of the table: "plan_categories" */
  update_plan_categories?: Maybe<Plan_Categories_Mutation_Response>;
  /** update single row of the table: "plan_categories" */
  update_plan_categories_by_pk?: Maybe<Plan_Categories>;
  /** update multiples rows of table: "plan_categories" */
  update_plan_categories_many?: Maybe<Array<Maybe<Plan_Categories_Mutation_Response>>>;
  /** update data of the table: "plans" */
  update_plans?: Maybe<Plans_Mutation_Response>;
  /** update single row of the table: "plans" */
  update_plans_by_pk?: Maybe<Plans>;
  /** update multiples rows of table: "plans" */
  update_plans_many?: Maybe<Array<Maybe<Plans_Mutation_Response>>>;
  /** update data of the table: "profile_categories" */
  update_profile_categories?: Maybe<Profile_Categories_Mutation_Response>;
  /** update single row of the table: "profile_categories" */
  update_profile_categories_by_pk?: Maybe<Profile_Categories>;
  /** update multiples rows of table: "profile_categories" */
  update_profile_categories_many?: Maybe<Array<Maybe<Profile_Categories_Mutation_Response>>>;
  /** update data of the table: "provider_type" */
  update_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** update single row of the table: "provider_type" */
  update_provider_type_by_pk?: Maybe<Provider_Type>;
  /** update multiples rows of table: "provider_type" */
  update_provider_type_many?: Maybe<Array<Maybe<Provider_Type_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "template_categories" */
  update_template_categories?: Maybe<Template_Categories_Mutation_Response>;
  /** update single row of the table: "template_categories" */
  update_template_categories_by_pk?: Maybe<Template_Categories>;
  /** update multiples rows of table: "template_categories" */
  update_template_categories_many?: Maybe<Array<Maybe<Template_Categories_Mutation_Response>>>;
  /** update data of the table: "template_tags" */
  update_template_tags?: Maybe<Template_Tags_Mutation_Response>;
  /** update single row of the table: "template_tags" */
  update_template_tags_by_pk?: Maybe<Template_Tags>;
  /** update multiples rows of table: "template_tags" */
  update_template_tags_many?: Maybe<Array<Maybe<Template_Tags_Mutation_Response>>>;
  /** update data of the table: "templates" */
  update_templates?: Maybe<Templates_Mutation_Response>;
  /** update single row of the table: "templates" */
  update_templates_by_pk?: Maybe<Templates>;
  /** update multiples rows of table: "templates" */
  update_templates_many?: Maybe<Array<Maybe<Templates_Mutation_Response>>>;
  /** update data of the table: "tokens_history" */
  update_tokens_history?: Maybe<Tokens_History_Mutation_Response>;
  /** update single row of the table: "tokens_history" */
  update_tokens_history_by_pk?: Maybe<Tokens_History>;
  /** update multiples rows of table: "tokens_history" */
  update_tokens_history_many?: Maybe<Array<Maybe<Tokens_History_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
  /** update data of the table: "wallets" */
  update_wallets?: Maybe<Wallets_Mutation_Response>;
  /** update single row of the table: "wallets" */
  update_wallets_by_pk?: Maybe<Wallets>;
  /** update multiples rows of table: "wallets" */
  update_wallets_many?: Maybe<Array<Maybe<Wallets_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ai_CategoriesArgs = {
  where: Ai_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ai_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ai_ModelsArgs = {
  where: Ai_Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ai_Models_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ChatsArgs = {
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Directus_FilesArgs = {
  where: Directus_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Directus_Files_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Directus_UsersArgs = {
  where: Directus_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Directus_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Password_Reset_TokensArgs = {
  where: Password_Reset_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Password_Reset_Tokens_By_PkArgs = {
  token: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_HistoryArgs = {
  where: Payment_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Plan_CategoriesArgs = {
  where: Plan_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PlansArgs = {
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Profile_CategoriesArgs = {
  where: Profile_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Provider_TypeArgs = {
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Provider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Template_CategoriesArgs = {
  where: Template_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Template_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Template_TagsArgs = {
  where: Template_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Template_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TemplatesArgs = {
  where: Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Templates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Tokens_HistoryArgs = {
  where: Tokens_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tokens_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WalletsArgs = {
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootGetVectorDataArgs = {
  data: GetVectorDataInput;
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_CategoriesArgs = {
  objects: Array<Ai_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Ai_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_Categories_OneArgs = {
  object: Ai_Categories_Insert_Input;
  on_conflict?: InputMaybe<Ai_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_ModelsArgs = {
  objects: Array<Ai_Models_Insert_Input>;
  on_conflict?: InputMaybe<Ai_Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_Models_OneArgs = {
  object: Ai_Models_Insert_Input;
  on_conflict?: InputMaybe<Ai_Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatsArgs = {
  objects: Array<Chats_Insert_Input>;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chats_OneArgs = {
  object: Chats_Insert_Input;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directus_FilesArgs = {
  objects: Array<Directus_Files_Insert_Input>;
  on_conflict?: InputMaybe<Directus_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directus_Files_OneArgs = {
  object: Directus_Files_Insert_Input;
  on_conflict?: InputMaybe<Directus_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directus_UsersArgs = {
  objects: Array<Directus_Users_Insert_Input>;
  on_conflict?: InputMaybe<Directus_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directus_Users_OneArgs = {
  object: Directus_Users_Insert_Input;
  on_conflict?: InputMaybe<Directus_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Password_Reset_TokensArgs = {
  objects: Array<Password_Reset_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Password_Reset_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Password_Reset_Tokens_OneArgs = {
  object: Password_Reset_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Password_Reset_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_HistoryArgs = {
  objects: Array<Payment_History_Insert_Input>;
  on_conflict?: InputMaybe<Payment_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_History_OneArgs = {
  object: Payment_History_Insert_Input;
  on_conflict?: InputMaybe<Payment_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_CategoriesArgs = {
  objects: Array<Plan_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Plan_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Categories_OneArgs = {
  object: Plan_Categories_Insert_Input;
  on_conflict?: InputMaybe<Plan_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlansArgs = {
  objects: Array<Plans_Insert_Input>;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plans_OneArgs = {
  object: Plans_Insert_Input;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_CategoriesArgs = {
  objects: Array<Profile_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Profile_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_Categories_OneArgs = {
  object: Profile_Categories_Insert_Input;
  on_conflict?: InputMaybe<Profile_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_TypeArgs = {
  objects: Array<Provider_Type_Insert_Input>;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_Type_OneArgs = {
  object: Provider_Type_Insert_Input;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_CategoriesArgs = {
  objects: Array<Template_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Template_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_Categories_OneArgs = {
  object: Template_Categories_Insert_Input;
  on_conflict?: InputMaybe<Template_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_TagsArgs = {
  objects: Array<Template_Tags_Insert_Input>;
  on_conflict?: InputMaybe<Template_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_Tags_OneArgs = {
  object: Template_Tags_Insert_Input;
  on_conflict?: InputMaybe<Template_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TemplatesArgs = {
  objects: Array<Templates_Insert_Input>;
  on_conflict?: InputMaybe<Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Templates_OneArgs = {
  object: Templates_Insert_Input;
  on_conflict?: InputMaybe<Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tokens_HistoryArgs = {
  objects: Array<Tokens_History_Insert_Input>;
  on_conflict?: InputMaybe<Tokens_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tokens_History_OneArgs = {
  object: Tokens_History_Insert_Input;
  on_conflict?: InputMaybe<Tokens_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WalletsArgs = {
  objects: Array<Wallets_Insert_Input>;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallets_OneArgs = {
  object: Wallets_Insert_Input;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMakeBetterPromtArgs = {
  data: MakeBetterPromtInput;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_CategoriesArgs = {
  _inc?: InputMaybe<Ai_Categories_Inc_Input>;
  _set?: InputMaybe<Ai_Categories_Set_Input>;
  where: Ai_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Categories_By_PkArgs = {
  _inc?: InputMaybe<Ai_Categories_Inc_Input>;
  _set?: InputMaybe<Ai_Categories_Set_Input>;
  pk_columns: Ai_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Categories_ManyArgs = {
  updates: Array<Ai_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_ModelsArgs = {
  _inc?: InputMaybe<Ai_Models_Inc_Input>;
  _set?: InputMaybe<Ai_Models_Set_Input>;
  where: Ai_Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Models_By_PkArgs = {
  _inc?: InputMaybe<Ai_Models_Inc_Input>;
  _set?: InputMaybe<Ai_Models_Set_Input>;
  pk_columns: Ai_Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Models_ManyArgs = {
  updates: Array<Ai_Models_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ChatsArgs = {
  _set?: InputMaybe<Chats_Set_Input>;
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chats_By_PkArgs = {
  _set?: InputMaybe<Chats_Set_Input>;
  pk_columns: Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chats_ManyArgs = {
  updates: Array<Chats_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_FilesArgs = {
  _inc?: InputMaybe<Directus_Files_Inc_Input>;
  _set?: InputMaybe<Directus_Files_Set_Input>;
  where: Directus_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_Files_By_PkArgs = {
  _inc?: InputMaybe<Directus_Files_Inc_Input>;
  _set?: InputMaybe<Directus_Files_Set_Input>;
  pk_columns: Directus_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_Files_ManyArgs = {
  updates: Array<Directus_Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_UsersArgs = {
  _set?: InputMaybe<Directus_Users_Set_Input>;
  where: Directus_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_Users_By_PkArgs = {
  _set?: InputMaybe<Directus_Users_Set_Input>;
  pk_columns: Directus_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Directus_Users_ManyArgs = {
  updates: Array<Directus_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_ManyArgs = {
  updates: Array<Documents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Password_Reset_TokensArgs = {
  _set?: InputMaybe<Password_Reset_Tokens_Set_Input>;
  where: Password_Reset_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Password_Reset_Tokens_By_PkArgs = {
  _set?: InputMaybe<Password_Reset_Tokens_Set_Input>;
  pk_columns: Password_Reset_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Password_Reset_Tokens_ManyArgs = {
  updates: Array<Password_Reset_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_HistoryArgs = {
  _append?: InputMaybe<Payment_History_Append_Input>;
  _delete_at_path?: InputMaybe<Payment_History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Payment_History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Payment_History_Delete_Key_Input>;
  _inc?: InputMaybe<Payment_History_Inc_Input>;
  _prepend?: InputMaybe<Payment_History_Prepend_Input>;
  _set?: InputMaybe<Payment_History_Set_Input>;
  where: Payment_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_History_By_PkArgs = {
  _append?: InputMaybe<Payment_History_Append_Input>;
  _delete_at_path?: InputMaybe<Payment_History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Payment_History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Payment_History_Delete_Key_Input>;
  _inc?: InputMaybe<Payment_History_Inc_Input>;
  _prepend?: InputMaybe<Payment_History_Prepend_Input>;
  _set?: InputMaybe<Payment_History_Set_Input>;
  pk_columns: Payment_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_History_ManyArgs = {
  updates: Array<Payment_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_CategoriesArgs = {
  _inc?: InputMaybe<Plan_Categories_Inc_Input>;
  _set?: InputMaybe<Plan_Categories_Set_Input>;
  where: Plan_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Categories_By_PkArgs = {
  _inc?: InputMaybe<Plan_Categories_Inc_Input>;
  _set?: InputMaybe<Plan_Categories_Set_Input>;
  pk_columns: Plan_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Categories_ManyArgs = {
  updates: Array<Plan_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlansArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plans_By_PkArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  pk_columns: Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plans_ManyArgs = {
  updates: Array<Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_CategoriesArgs = {
  _inc?: InputMaybe<Profile_Categories_Inc_Input>;
  _set?: InputMaybe<Profile_Categories_Set_Input>;
  where: Profile_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Categories_By_PkArgs = {
  _inc?: InputMaybe<Profile_Categories_Inc_Input>;
  _set?: InputMaybe<Profile_Categories_Set_Input>;
  pk_columns: Profile_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Categories_ManyArgs = {
  updates: Array<Profile_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_TypeArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_By_PkArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  pk_columns: Provider_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_ManyArgs = {
  updates: Array<Provider_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Template_CategoriesArgs = {
  _inc?: InputMaybe<Template_Categories_Inc_Input>;
  _set?: InputMaybe<Template_Categories_Set_Input>;
  where: Template_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Template_Categories_By_PkArgs = {
  _inc?: InputMaybe<Template_Categories_Inc_Input>;
  _set?: InputMaybe<Template_Categories_Set_Input>;
  pk_columns: Template_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Template_Categories_ManyArgs = {
  updates: Array<Template_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Template_TagsArgs = {
  _inc?: InputMaybe<Template_Tags_Inc_Input>;
  _set?: InputMaybe<Template_Tags_Set_Input>;
  where: Template_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Template_Tags_By_PkArgs = {
  _inc?: InputMaybe<Template_Tags_Inc_Input>;
  _set?: InputMaybe<Template_Tags_Set_Input>;
  pk_columns: Template_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Template_Tags_ManyArgs = {
  updates: Array<Template_Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TemplatesArgs = {
  _inc?: InputMaybe<Templates_Inc_Input>;
  _set?: InputMaybe<Templates_Set_Input>;
  where: Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Templates_By_PkArgs = {
  _inc?: InputMaybe<Templates_Inc_Input>;
  _set?: InputMaybe<Templates_Set_Input>;
  pk_columns: Templates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Templates_ManyArgs = {
  updates: Array<Templates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_HistoryArgs = {
  _inc?: InputMaybe<Tokens_History_Inc_Input>;
  _set?: InputMaybe<Tokens_History_Set_Input>;
  where: Tokens_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_History_By_PkArgs = {
  _inc?: InputMaybe<Tokens_History_Inc_Input>;
  _set?: InputMaybe<Tokens_History_Set_Input>;
  pk_columns: Tokens_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_History_ManyArgs = {
  updates: Array<Tokens_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WalletsArgs = {
  _inc?: InputMaybe<Wallets_Inc_Input>;
  _set?: InputMaybe<Wallets_Set_Input>;
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wallets_By_PkArgs = {
  _inc?: InputMaybe<Wallets_Inc_Input>;
  _set?: InputMaybe<Wallets_Set_Input>;
  pk_columns: Wallets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Wallets_ManyArgs = {
  updates: Array<Wallets_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "password_reset_tokens" */
export type Password_Reset_Tokens = {
  __typename?: 'password_reset_tokens';
  email: Scalars['String']['output'];
  expires: Scalars['timestamptz']['output'];
  token: Scalars['uuid']['output'];
};

/** aggregated selection of "password_reset_tokens" */
export type Password_Reset_Tokens_Aggregate = {
  __typename?: 'password_reset_tokens_aggregate';
  aggregate?: Maybe<Password_Reset_Tokens_Aggregate_Fields>;
  nodes: Array<Password_Reset_Tokens>;
};

/** aggregate fields of "password_reset_tokens" */
export type Password_Reset_Tokens_Aggregate_Fields = {
  __typename?: 'password_reset_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Password_Reset_Tokens_Max_Fields>;
  min?: Maybe<Password_Reset_Tokens_Min_Fields>;
};


/** aggregate fields of "password_reset_tokens" */
export type Password_Reset_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Password_Reset_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "password_reset_tokens". All fields are combined with a logical 'AND'. */
export type Password_Reset_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Password_Reset_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Password_Reset_Tokens_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  token?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "password_reset_tokens" */
export enum Password_Reset_Tokens_Constraint {
  /** unique or primary key constraint on columns "email" */
  PasswordResetTokenEmailKey = 'password_reset_token_email_key',
  /** unique or primary key constraint on columns "token" */
  PasswordResetTokenPkey = 'password_reset_token_pkey'
}

/** input type for inserting data into table "password_reset_tokens" */
export type Password_Reset_Tokens_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  token?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Password_Reset_Tokens_Max_Fields = {
  __typename?: 'password_reset_tokens_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamptz']['output']>;
  token?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Password_Reset_Tokens_Min_Fields = {
  __typename?: 'password_reset_tokens_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamptz']['output']>;
  token?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "password_reset_tokens" */
export type Password_Reset_Tokens_Mutation_Response = {
  __typename?: 'password_reset_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Password_Reset_Tokens>;
};

/** on_conflict condition type for table "password_reset_tokens" */
export type Password_Reset_Tokens_On_Conflict = {
  constraint: Password_Reset_Tokens_Constraint;
  update_columns?: Array<Password_Reset_Tokens_Update_Column>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "password_reset_tokens". */
export type Password_Reset_Tokens_Order_By = {
  email?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: password_reset_tokens */
export type Password_Reset_Tokens_Pk_Columns_Input = {
  token: Scalars['uuid']['input'];
};

/** select columns of table "password_reset_tokens" */
export enum Password_Reset_Tokens_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Expires = 'expires',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "password_reset_tokens" */
export type Password_Reset_Tokens_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  token?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "password_reset_tokens" */
export type Password_Reset_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Password_Reset_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Password_Reset_Tokens_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  token?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "password_reset_tokens" */
export enum Password_Reset_Tokens_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Expires = 'expires',
  /** column name */
  Token = 'token'
}

export type Password_Reset_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Password_Reset_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Password_Reset_Tokens_Bool_Exp;
};

/** columns and relationships of "payment_history" */
export type Payment_History = {
  __typename?: 'payment_history';
  amount?: Maybe<Scalars['Int']['output']>;
  card?: Maybe<Scalars['String']['output']>;
  card_exp_date?: Maybe<Scalars['String']['output']>;
  data: Scalars['jsonb']['output'];
  date: Scalars['timestamptz']['output'];
  four_last?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  invoice_id?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
  status: Scalars['Int']['output'];
  transaction_id: Scalars['Int']['output'];
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "payment_history" */
export type Payment_HistoryDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "payment_history" */
export type Payment_History_Aggregate = {
  __typename?: 'payment_history_aggregate';
  aggregate?: Maybe<Payment_History_Aggregate_Fields>;
  nodes: Array<Payment_History>;
};

/** aggregate fields of "payment_history" */
export type Payment_History_Aggregate_Fields = {
  __typename?: 'payment_history_aggregate_fields';
  avg?: Maybe<Payment_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_History_Max_Fields>;
  min?: Maybe<Payment_History_Min_Fields>;
  stddev?: Maybe<Payment_History_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_History_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_History_Sum_Fields>;
  var_pop?: Maybe<Payment_History_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_History_Var_Samp_Fields>;
  variance?: Maybe<Payment_History_Variance_Fields>;
};


/** aggregate fields of "payment_history" */
export type Payment_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Payment_History_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Payment_History_Avg_Fields = {
  __typename?: 'payment_history_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payment_history". All fields are combined with a logical 'AND'. */
export type Payment_History_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_History_Bool_Exp>>;
  _not?: InputMaybe<Payment_History_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_History_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  card?: InputMaybe<String_Comparison_Exp>;
  card_exp_date?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  four_last?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invoice_id?: InputMaybe<String_Comparison_Exp>;
  plan?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_history" */
export enum Payment_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentHistoryPkey = 'payment_history_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Payment_History_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Payment_History_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Payment_History_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "payment_history" */
export type Payment_History_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "payment_history" */
export type Payment_History_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  card?: InputMaybe<Scalars['String']['input']>;
  card_exp_date?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  four_last?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoice_id?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Payment_History_Max_Fields = {
  __typename?: 'payment_history_max_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  card?: Maybe<Scalars['String']['output']>;
  card_exp_date?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  four_last?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoice_id?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Payment_History_Min_Fields = {
  __typename?: 'payment_history_min_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  card?: Maybe<Scalars['String']['output']>;
  card_exp_date?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  four_last?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoice_id?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "payment_history" */
export type Payment_History_Mutation_Response = {
  __typename?: 'payment_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_History>;
};

/** on_conflict condition type for table "payment_history" */
export type Payment_History_On_Conflict = {
  constraint: Payment_History_Constraint;
  update_columns?: Array<Payment_History_Update_Column>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_history". */
export type Payment_History_Order_By = {
  amount?: InputMaybe<Order_By>;
  card?: InputMaybe<Order_By>;
  card_exp_date?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  four_last?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_id?: InputMaybe<Order_By>;
  plan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_history */
export type Payment_History_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Payment_History_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "payment_history" */
export enum Payment_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Card = 'card',
  /** column name */
  CardExpDate = 'card_exp_date',
  /** column name */
  Data = 'data',
  /** column name */
  Date = 'date',
  /** column name */
  FourLast = 'four_last',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceId = 'invoice_id',
  /** column name */
  Plan = 'plan',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "payment_history" */
export type Payment_History_Set_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  card?: InputMaybe<Scalars['String']['input']>;
  card_exp_date?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  four_last?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoice_id?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Payment_History_Stddev_Fields = {
  __typename?: 'payment_history_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Payment_History_Stddev_Pop_Fields = {
  __typename?: 'payment_history_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Payment_History_Stddev_Samp_Fields = {
  __typename?: 'payment_history_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "payment_history" */
export type Payment_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_History_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  card?: InputMaybe<Scalars['String']['input']>;
  card_exp_date?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  four_last?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoice_id?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Payment_History_Sum_Fields = {
  __typename?: 'payment_history_sum_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "payment_history" */
export enum Payment_History_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Card = 'card',
  /** column name */
  CardExpDate = 'card_exp_date',
  /** column name */
  Data = 'data',
  /** column name */
  Date = 'date',
  /** column name */
  FourLast = 'four_last',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceId = 'invoice_id',
  /** column name */
  Plan = 'plan',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UserId = 'user_id'
}

export type Payment_History_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Payment_History_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Payment_History_Delete_At_Path_Input>;
  /**
   * delete the array element with specified index (negative integers count from
   * the end). throws an error if top level container is not an array
   */
  _delete_elem?: InputMaybe<Payment_History_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Payment_History_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_History_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Payment_History_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_History_Var_Pop_Fields = {
  __typename?: 'payment_history_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Payment_History_Var_Samp_Fields = {
  __typename?: 'payment_history_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Payment_History_Variance_Fields = {
  __typename?: 'payment_history_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "plan_categories" */
export type Plan_Categories = {
  __typename?: 'plan_categories';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "plan_categories" */
export type Plan_Categories_Aggregate = {
  __typename?: 'plan_categories_aggregate';
  aggregate?: Maybe<Plan_Categories_Aggregate_Fields>;
  nodes: Array<Plan_Categories>;
};

/** aggregate fields of "plan_categories" */
export type Plan_Categories_Aggregate_Fields = {
  __typename?: 'plan_categories_aggregate_fields';
  avg?: Maybe<Plan_Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Plan_Categories_Max_Fields>;
  min?: Maybe<Plan_Categories_Min_Fields>;
  stddev?: Maybe<Plan_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Categories_Sum_Fields>;
  var_pop?: Maybe<Plan_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Categories_Var_Samp_Fields>;
  variance?: Maybe<Plan_Categories_Variance_Fields>;
};


/** aggregate fields of "plan_categories" */
export type Plan_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plan_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Plan_Categories_Avg_Fields = {
  __typename?: 'plan_categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "plan_categories". All fields are combined with a logical 'AND'. */
export type Plan_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Plan_Categories_Bool_Exp>>;
  _not?: InputMaybe<Plan_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Plan_Categories_Bool_Exp>>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan_categories" */
export enum Plan_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlanCategoriesPkey = 'plan_categories_pkey'
}

/** input type for incrementing numeric columns in table "plan_categories" */
export type Plan_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "plan_categories" */
export type Plan_Categories_Insert_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Plan_Categories_Max_Fields = {
  __typename?: 'plan_categories_max_fields';
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Plan_Categories_Min_Fields = {
  __typename?: 'plan_categories_min_fields';
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "plan_categories" */
export type Plan_Categories_Mutation_Response = {
  __typename?: 'plan_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan_Categories>;
};

/** on_conflict condition type for table "plan_categories" */
export type Plan_Categories_On_Conflict = {
  constraint: Plan_Categories_Constraint;
  update_columns?: Array<Plan_Categories_Update_Column>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "plan_categories". */
export type Plan_Categories_Order_By = {
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plan_categories */
export type Plan_Categories_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "plan_categories" */
export enum Plan_Categories_Select_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "plan_categories" */
export type Plan_Categories_Set_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Plan_Categories_Stddev_Fields = {
  __typename?: 'plan_categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Plan_Categories_Stddev_Pop_Fields = {
  __typename?: 'plan_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Plan_Categories_Stddev_Samp_Fields = {
  __typename?: 'plan_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "plan_categories" */
export type Plan_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plan_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plan_Categories_Stream_Cursor_Value_Input = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Plan_Categories_Sum_Fields = {
  __typename?: 'plan_categories_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "plan_categories" */
export enum Plan_Categories_Update_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

export type Plan_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plan_Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plan_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plan_Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plan_Categories_Var_Pop_Fields = {
  __typename?: 'plan_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Plan_Categories_Var_Samp_Fields = {
  __typename?: 'plan_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Plan_Categories_Variance_Fields = {
  __typename?: 'plan_categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "plans" */
export type Plans = {
  __typename?: 'plans';
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
};

/** aggregated selection of "plans" */
export type Plans_Aggregate = {
  __typename?: 'plans_aggregate';
  aggregate?: Maybe<Plans_Aggregate_Fields>;
  nodes: Array<Plans>;
};

/** aggregate fields of "plans" */
export type Plans_Aggregate_Fields = {
  __typename?: 'plans_aggregate_fields';
  avg?: Maybe<Plans_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Plans_Max_Fields>;
  min?: Maybe<Plans_Min_Fields>;
  stddev?: Maybe<Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Plans_Sum_Fields>;
  var_pop?: Maybe<Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Plans_Var_Samp_Fields>;
  variance?: Maybe<Plans_Variance_Fields>;
};


/** aggregate fields of "plans" */
export type Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Plans_Avg_Fields = {
  __typename?: 'plans_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "plans". All fields are combined with a logical 'AND'. */
export type Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Plans_Bool_Exp>>;
  _not?: InputMaybe<Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Plans_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "plans" */
export enum Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlansPkey = 'plans_pkey'
}

/** input type for incrementing numeric columns in table "plans" */
export type Plans_Inc_Input = {
  price?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "plans" */
export type Plans_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Plans_Max_Fields = {
  __typename?: 'plans_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Plans_Min_Fields = {
  __typename?: 'plans_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "plans" */
export type Plans_Mutation_Response = {
  __typename?: 'plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plans>;
};

/** on_conflict condition type for table "plans" */
export type Plans_On_Conflict = {
  constraint: Plans_Constraint;
  update_columns?: Array<Plans_Update_Column>;
  where?: InputMaybe<Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "plans". */
export type Plans_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plans */
export type Plans_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Tokens = 'tokens'
}

/** input type for updating data in table "plans" */
export type Plans_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Plans_Stddev_Fields = {
  __typename?: 'plans_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Plans_Stddev_Pop_Fields = {
  __typename?: 'plans_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Plans_Stddev_Samp_Fields = {
  __typename?: 'plans_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "plans" */
export type Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plans_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Plans_Sum_Fields = {
  __typename?: 'plans_sum_fields';
  price?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "plans" */
export enum Plans_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Tokens = 'tokens'
}

export type Plans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plans_Var_Pop_Fields = {
  __typename?: 'plans_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Plans_Var_Samp_Fields = {
  __typename?: 'plans_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Plans_Variance_Fields = {
  __typename?: 'plans_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** the profile layout buttons data */
export type Profile_Categories = {
  __typename?: 'profile_categories';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['bpchar']['output']>;
  title: Scalars['String']['output'];
};

/** aggregated selection of "profile_categories" */
export type Profile_Categories_Aggregate = {
  __typename?: 'profile_categories_aggregate';
  aggregate?: Maybe<Profile_Categories_Aggregate_Fields>;
  nodes: Array<Profile_Categories>;
};

/** aggregate fields of "profile_categories" */
export type Profile_Categories_Aggregate_Fields = {
  __typename?: 'profile_categories_aggregate_fields';
  avg?: Maybe<Profile_Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Profile_Categories_Max_Fields>;
  min?: Maybe<Profile_Categories_Min_Fields>;
  stddev?: Maybe<Profile_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Categories_Sum_Fields>;
  var_pop?: Maybe<Profile_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Categories_Var_Samp_Fields>;
  variance?: Maybe<Profile_Categories_Variance_Fields>;
};


/** aggregate fields of "profile_categories" */
export type Profile_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Profile_Categories_Avg_Fields = {
  __typename?: 'profile_categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "profile_categories". All fields are combined with a logical 'AND'. */
export type Profile_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Categories_Bool_Exp>>;
  _not?: InputMaybe<Profile_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Categories_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Bpchar_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile_categories" */
export enum Profile_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfileCategoriesPkey = 'profile_categories_pkey'
}

/** input type for incrementing numeric columns in table "profile_categories" */
export type Profile_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "profile_categories" */
export type Profile_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['bpchar']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Profile_Categories_Max_Fields = {
  __typename?: 'profile_categories_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['bpchar']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profile_Categories_Min_Fields = {
  __typename?: 'profile_categories_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['bpchar']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profile_categories" */
export type Profile_Categories_Mutation_Response = {
  __typename?: 'profile_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile_Categories>;
};

/** on_conflict condition type for table "profile_categories" */
export type Profile_Categories_On_Conflict = {
  constraint: Profile_Categories_Constraint;
  update_columns?: Array<Profile_Categories_Update_Column>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "profile_categories". */
export type Profile_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile_categories */
export type Profile_Categories_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "profile_categories" */
export enum Profile_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "profile_categories" */
export type Profile_Categories_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['bpchar']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Profile_Categories_Stddev_Fields = {
  __typename?: 'profile_categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Profile_Categories_Stddev_Pop_Fields = {
  __typename?: 'profile_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Profile_Categories_Stddev_Samp_Fields = {
  __typename?: 'profile_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "profile_categories" */
export type Profile_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profile_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profile_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['bpchar']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Profile_Categories_Sum_Fields = {
  __typename?: 'profile_categories_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "profile_categories" */
export enum Profile_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

export type Profile_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profile_Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profile_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profile_Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profile_Categories_Var_Pop_Fields = {
  __typename?: 'profile_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Profile_Categories_Var_Samp_Fields = {
  __typename?: 'profile_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Profile_Categories_Variance_Fields = {
  __typename?: 'profile_categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "provider_type" */
export type Provider_Type = {
  __typename?: 'provider_type';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** aggregated selection of "provider_type" */
export type Provider_Type_Aggregate = {
  __typename?: 'provider_type_aggregate';
  aggregate?: Maybe<Provider_Type_Aggregate_Fields>;
  nodes: Array<Provider_Type>;
};

/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_Fields = {
  __typename?: 'provider_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Provider_Type_Max_Fields>;
  min?: Maybe<Provider_Type_Min_Fields>;
};


/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "provider_type". All fields are combined with a logical 'AND'. */
export type Provider_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  _not?: InputMaybe<Provider_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "provider_type" */
export enum Provider_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProviderTypePkey = 'provider_type_pkey'
}

/** input type for inserting data into table "provider_type" */
export type Provider_Type_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Provider_Type_Max_Fields = {
  __typename?: 'provider_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Provider_Type_Min_Fields = {
  __typename?: 'provider_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "provider_type" */
export type Provider_Type_Mutation_Response = {
  __typename?: 'provider_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Provider_Type>;
};

/** input type for inserting object relation for remote table "provider_type" */
export type Provider_Type_Obj_Rel_Insert_Input = {
  data: Provider_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};

/** on_conflict condition type for table "provider_type" */
export type Provider_Type_On_Conflict = {
  constraint: Provider_Type_Constraint;
  update_columns?: Array<Provider_Type_Update_Column>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "provider_type". */
export type Provider_Type_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: provider_type */
export type Provider_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "provider_type" */
export enum Provider_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "provider_type" */
export type Provider_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "provider_type" */
export type Provider_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "provider_type" */
export enum Provider_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Provider_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Provider_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Provider_Type_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** Filter options for a local Aggregate query, used to convert the result to the specified filters */
  Aggregate?: Maybe<AggregateObjectsObj>;
  /** Get Objects on a local Weaviate */
  Get?: Maybe<GetObjectsObj>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "ai_categories" */
  ai_categories: Array<Ai_Categories>;
  /** fetch aggregated fields from the table: "ai_categories" */
  ai_categories_aggregate: Ai_Categories_Aggregate;
  /** fetch data from the table: "ai_categories" using primary key columns */
  ai_categories_by_pk?: Maybe<Ai_Categories>;
  /** fetch data from the table: "ai_models" */
  ai_models: Array<Ai_Models>;
  /** fetch aggregated fields from the table: "ai_models" */
  ai_models_aggregate: Ai_Models_Aggregate;
  /** fetch data from the table: "ai_models" using primary key columns */
  ai_models_by_pk?: Maybe<Ai_Models>;
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table: "directus_files" */
  directus_files: Array<Directus_Files>;
  /** fetch aggregated fields from the table: "directus_files" */
  directus_files_aggregate: Directus_Files_Aggregate;
  /** fetch data from the table: "directus_files" using primary key columns */
  directus_files_by_pk?: Maybe<Directus_Files>;
  /** fetch data from the table: "directus_users" */
  directus_users: Array<Directus_Users>;
  /** fetch aggregated fields from the table: "directus_users" */
  directus_users_aggregate: Directus_Users_Aggregate;
  /** fetch data from the table: "directus_users" using primary key columns */
  directus_users_by_pk?: Maybe<Directus_Users>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "password_reset_tokens" */
  password_reset_tokens: Array<Password_Reset_Tokens>;
  /** fetch aggregated fields from the table: "password_reset_tokens" */
  password_reset_tokens_aggregate: Password_Reset_Tokens_Aggregate;
  /** fetch data from the table: "password_reset_tokens" using primary key columns */
  password_reset_tokens_by_pk?: Maybe<Password_Reset_Tokens>;
  /** fetch data from the table: "payment_history" */
  payment_history: Array<Payment_History>;
  /** fetch aggregated fields from the table: "payment_history" */
  payment_history_aggregate: Payment_History_Aggregate;
  /** fetch data from the table: "payment_history" using primary key columns */
  payment_history_by_pk?: Maybe<Payment_History>;
  /** fetch data from the table: "plan_categories" */
  plan_categories: Array<Plan_Categories>;
  /** fetch aggregated fields from the table: "plan_categories" */
  plan_categories_aggregate: Plan_Categories_Aggregate;
  /** fetch data from the table: "plan_categories" using primary key columns */
  plan_categories_by_pk?: Maybe<Plan_Categories>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plans_aggregate: Plans_Aggregate;
  /** fetch data from the table: "plans" using primary key columns */
  plans_by_pk?: Maybe<Plans>;
  /** fetch data from the table: "profile_categories" */
  profile_categories: Array<Profile_Categories>;
  /** fetch aggregated fields from the table: "profile_categories" */
  profile_categories_aggregate: Profile_Categories_Aggregate;
  /** fetch data from the table: "profile_categories" using primary key columns */
  profile_categories_by_pk?: Maybe<Profile_Categories>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "template_categories" */
  template_categories: Array<Template_Categories>;
  /** fetch aggregated fields from the table: "template_categories" */
  template_categories_aggregate: Template_Categories_Aggregate;
  /** fetch data from the table: "template_categories" using primary key columns */
  template_categories_by_pk?: Maybe<Template_Categories>;
  /** fetch data from the table: "template_tags" */
  template_tags: Array<Template_Tags>;
  /** fetch aggregated fields from the table: "template_tags" */
  template_tags_aggregate: Template_Tags_Aggregate;
  /** fetch data from the table: "template_tags" using primary key columns */
  template_tags_by_pk?: Maybe<Template_Tags>;
  /** An array relationship */
  templates: Array<Templates>;
  /** An aggregate relationship */
  templates_aggregate: Templates_Aggregate;
  /** fetch data from the table: "templates" using primary key columns */
  templates_by_pk?: Maybe<Templates>;
  /** fetch data from the table: "tokens_history" */
  tokens_history: Array<Tokens_History>;
  /** fetch aggregated fields from the table: "tokens_history" */
  tokens_history_aggregate: Tokens_History_Aggregate;
  /** fetch data from the table: "tokens_history" using primary key columns */
  tokens_history_by_pk?: Maybe<Tokens_History>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table: "wallets" */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "wallets" using primary key columns */
  wallets_by_pk?: Maybe<Wallets>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAi_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Ai_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Categories_Order_By>>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};


export type Query_RootAi_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Categories_Order_By>>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};


export type Query_RootAi_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootAi_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Ai_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Models_Order_By>>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};


export type Query_RootAi_Models_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Models_Order_By>>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};


export type Query_RootAi_Models_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDirectus_FilesArgs = {
  distinct_on?: InputMaybe<Array<Directus_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Files_Order_By>>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};


export type Query_RootDirectus_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directus_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Files_Order_By>>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};


export type Query_RootDirectus_Files_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDirectus_UsersArgs = {
  distinct_on?: InputMaybe<Array<Directus_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Users_Order_By>>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};


export type Query_RootDirectus_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directus_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Users_Order_By>>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};


export type Query_RootDirectus_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPassword_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};


export type Query_RootPassword_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};


export type Query_RootPassword_Reset_Tokens_By_PkArgs = {
  token: Scalars['uuid']['input'];
};


export type Query_RootPayment_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_History_Order_By>>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};


export type Query_RootPayment_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_History_Order_By>>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};


export type Query_RootPayment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlan_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Plan_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Categories_Order_By>>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};


export type Query_RootPlan_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Categories_Order_By>>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};


export type Query_RootPlan_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfile_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Profile_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Categories_Order_By>>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};


export type Query_RootProfile_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Categories_Order_By>>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};


export type Query_RootProfile_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Query_RootTemplate_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Template_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Categories_Order_By>>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};


export type Query_RootTemplate_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Categories_Order_By>>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};


export type Query_RootTemplate_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTemplate_TagsArgs = {
  distinct_on?: InputMaybe<Array<Template_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Tags_Order_By>>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};


export type Query_RootTemplate_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Tags_Order_By>>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};


export type Query_RootTemplate_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTemplatesArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


export type Query_RootTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


export type Query_RootTemplates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTokens_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Tokens_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_History_Order_By>>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};


export type Query_RootTokens_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_History_Order_By>>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};


export type Query_RootTokens_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Query_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An object relationship */
  directus_img?: Maybe<Directus_Files>;
  /** An object relationship */
  directus_img_min?: Maybe<Directus_Files>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['uuid']['output']>;
  image_min?: Maybe<Scalars['uuid']['output']>;
  initial_message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

export type Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Roles_Aggregate_Bool_Exp_Count>;
};

export type Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Roles_Max_Order_By>;
  min?: InputMaybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  directus_img?: InputMaybe<Directus_Files_Bool_Exp>;
  directus_img_min?: InputMaybe<Directus_Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Uuid_Comparison_Exp>;
  image_min?: InputMaybe<Uuid_Comparison_Exp>;
  initial_message?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  promt?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey',
  /** unique or primary key constraint on columns "id" */
  RolesUidKey = 'roles_uid_key'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  directus_img?: InputMaybe<Directus_Files_Obj_Rel_Insert_Input>;
  directus_img_min?: InputMaybe<Directus_Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  image_min?: InputMaybe<Scalars['uuid']['input']>;
  initial_message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['uuid']['output']>;
  image_min?: Maybe<Scalars['uuid']['output']>;
  initial_message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  image_min?: InputMaybe<Order_By>;
  initial_message?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['uuid']['output']>;
  image_min?: Maybe<Scalars['uuid']['output']>;
  initial_message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  image_min?: InputMaybe<Order_By>;
  initial_message?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  directus_img?: InputMaybe<Directus_Files_Order_By>;
  directus_img_min?: InputMaybe<Directus_Files_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  image_min?: InputMaybe<Order_By>;
  initial_message?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ImageMin = 'image_min',
  /** column name */
  InitialMessage = 'initial_message',
  /** column name */
  Name = 'name',
  /** column name */
  Promt = 'promt',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  image_min?: InputMaybe<Scalars['uuid']['input']>;
  initial_message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  image_min?: InputMaybe<Scalars['uuid']['input']>;
  initial_message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ImageMin = 'image_min',
  /** column name */
  InitialMessage = 'initial_message',
  /** column name */
  Name = 'name',
  /** column name */
  Promt = 'promt',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  sessionToken: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "sessionToken" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  sessionToken: Scalars['String']['input'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "ai_categories" */
  ai_categories: Array<Ai_Categories>;
  /** fetch aggregated fields from the table: "ai_categories" */
  ai_categories_aggregate: Ai_Categories_Aggregate;
  /** fetch data from the table: "ai_categories" using primary key columns */
  ai_categories_by_pk?: Maybe<Ai_Categories>;
  /** fetch data from the table in a streaming manner: "ai_categories" */
  ai_categories_stream: Array<Ai_Categories>;
  /** fetch data from the table: "ai_models" */
  ai_models: Array<Ai_Models>;
  /** fetch aggregated fields from the table: "ai_models" */
  ai_models_aggregate: Ai_Models_Aggregate;
  /** fetch data from the table: "ai_models" using primary key columns */
  ai_models_by_pk?: Maybe<Ai_Models>;
  /** fetch data from the table in a streaming manner: "ai_models" */
  ai_models_stream: Array<Ai_Models>;
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table in a streaming manner: "chats" */
  chats_stream: Array<Chats>;
  /** fetch data from the table: "directus_files" */
  directus_files: Array<Directus_Files>;
  /** fetch aggregated fields from the table: "directus_files" */
  directus_files_aggregate: Directus_Files_Aggregate;
  /** fetch data from the table: "directus_files" using primary key columns */
  directus_files_by_pk?: Maybe<Directus_Files>;
  /** fetch data from the table in a streaming manner: "directus_files" */
  directus_files_stream: Array<Directus_Files>;
  /** fetch data from the table: "directus_users" */
  directus_users: Array<Directus_Users>;
  /** fetch aggregated fields from the table: "directus_users" */
  directus_users_aggregate: Directus_Users_Aggregate;
  /** fetch data from the table: "directus_users" using primary key columns */
  directus_users_by_pk?: Maybe<Directus_Users>;
  /** fetch data from the table in a streaming manner: "directus_users" */
  directus_users_stream: Array<Directus_Users>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table in a streaming manner: "documents" */
  documents_stream: Array<Documents>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "password_reset_tokens" */
  password_reset_tokens: Array<Password_Reset_Tokens>;
  /** fetch aggregated fields from the table: "password_reset_tokens" */
  password_reset_tokens_aggregate: Password_Reset_Tokens_Aggregate;
  /** fetch data from the table: "password_reset_tokens" using primary key columns */
  password_reset_tokens_by_pk?: Maybe<Password_Reset_Tokens>;
  /** fetch data from the table in a streaming manner: "password_reset_tokens" */
  password_reset_tokens_stream: Array<Password_Reset_Tokens>;
  /** fetch data from the table: "payment_history" */
  payment_history: Array<Payment_History>;
  /** fetch aggregated fields from the table: "payment_history" */
  payment_history_aggregate: Payment_History_Aggregate;
  /** fetch data from the table: "payment_history" using primary key columns */
  payment_history_by_pk?: Maybe<Payment_History>;
  /** fetch data from the table in a streaming manner: "payment_history" */
  payment_history_stream: Array<Payment_History>;
  /** fetch data from the table: "plan_categories" */
  plan_categories: Array<Plan_Categories>;
  /** fetch aggregated fields from the table: "plan_categories" */
  plan_categories_aggregate: Plan_Categories_Aggregate;
  /** fetch data from the table: "plan_categories" using primary key columns */
  plan_categories_by_pk?: Maybe<Plan_Categories>;
  /** fetch data from the table in a streaming manner: "plan_categories" */
  plan_categories_stream: Array<Plan_Categories>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plans_aggregate: Plans_Aggregate;
  /** fetch data from the table: "plans" using primary key columns */
  plans_by_pk?: Maybe<Plans>;
  /** fetch data from the table in a streaming manner: "plans" */
  plans_stream: Array<Plans>;
  /** fetch data from the table: "profile_categories" */
  profile_categories: Array<Profile_Categories>;
  /** fetch aggregated fields from the table: "profile_categories" */
  profile_categories_aggregate: Profile_Categories_Aggregate;
  /** fetch data from the table: "profile_categories" using primary key columns */
  profile_categories_by_pk?: Maybe<Profile_Categories>;
  /** fetch data from the table in a streaming manner: "profile_categories" */
  profile_categories_stream: Array<Profile_Categories>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** fetch data from the table in a streaming manner: "provider_type" */
  provider_type_stream: Array<Provider_Type>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "template_categories" */
  template_categories: Array<Template_Categories>;
  /** fetch aggregated fields from the table: "template_categories" */
  template_categories_aggregate: Template_Categories_Aggregate;
  /** fetch data from the table: "template_categories" using primary key columns */
  template_categories_by_pk?: Maybe<Template_Categories>;
  /** fetch data from the table in a streaming manner: "template_categories" */
  template_categories_stream: Array<Template_Categories>;
  /** fetch data from the table: "template_tags" */
  template_tags: Array<Template_Tags>;
  /** fetch aggregated fields from the table: "template_tags" */
  template_tags_aggregate: Template_Tags_Aggregate;
  /** fetch data from the table: "template_tags" using primary key columns */
  template_tags_by_pk?: Maybe<Template_Tags>;
  /** fetch data from the table in a streaming manner: "template_tags" */
  template_tags_stream: Array<Template_Tags>;
  /** An array relationship */
  templates: Array<Templates>;
  /** An aggregate relationship */
  templates_aggregate: Templates_Aggregate;
  /** fetch data from the table: "templates" using primary key columns */
  templates_by_pk?: Maybe<Templates>;
  /** fetch data from the table in a streaming manner: "templates" */
  templates_stream: Array<Templates>;
  /** fetch data from the table: "tokens_history" */
  tokens_history: Array<Tokens_History>;
  /** fetch aggregated fields from the table: "tokens_history" */
  tokens_history_aggregate: Tokens_History_Aggregate;
  /** fetch data from the table: "tokens_history" using primary key columns */
  tokens_history_by_pk?: Maybe<Tokens_History>;
  /** fetch data from the table in a streaming manner: "tokens_history" */
  tokens_history_stream: Array<Tokens_History>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
  /** fetch data from the table: "wallets" */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "wallets" using primary key columns */
  wallets_by_pk?: Maybe<Wallets>;
  /** fetch data from the table in a streaming manner: "wallets" */
  wallets_stream: Array<Wallets>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAi_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Ai_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Categories_Order_By>>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};


export type Subscription_RootAi_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Categories_Order_By>>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};


export type Subscription_RootAi_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAi_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ai_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Ai_Categories_Bool_Exp>;
};


export type Subscription_RootAi_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Ai_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Models_Order_By>>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};


export type Subscription_RootAi_Models_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Models_Order_By>>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};


export type Subscription_RootAi_Models_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAi_Models_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ai_Models_Stream_Cursor_Input>>;
  where?: InputMaybe<Ai_Models_Bool_Exp>;
};


export type Subscription_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootDirectus_FilesArgs = {
  distinct_on?: InputMaybe<Array<Directus_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Files_Order_By>>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};


export type Subscription_RootDirectus_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directus_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Files_Order_By>>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};


export type Subscription_RootDirectus_Files_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDirectus_Files_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Directus_Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Directus_Files_Bool_Exp>;
};


export type Subscription_RootDirectus_UsersArgs = {
  distinct_on?: InputMaybe<Array<Directus_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Users_Order_By>>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};


export type Subscription_RootDirectus_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directus_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directus_Users_Order_By>>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};


export type Subscription_RootDirectus_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDirectus_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Directus_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Directus_Users_Bool_Exp>;
};


export type Subscription_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDocuments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Documents_Stream_Cursor_Input>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootPassword_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootPassword_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootPassword_Reset_Tokens_By_PkArgs = {
  token: Scalars['uuid']['input'];
};


export type Subscription_RootPassword_Reset_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Password_Reset_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Password_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootPayment_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_History_Order_By>>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};


export type Subscription_RootPayment_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_History_Order_By>>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};


export type Subscription_RootPayment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayment_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_History_Bool_Exp>;
};


export type Subscription_RootPlan_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Plan_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Categories_Order_By>>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};


export type Subscription_RootPlan_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Categories_Order_By>>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};


export type Subscription_RootPlan_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPlan_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plan_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Plan_Categories_Bool_Exp>;
};


export type Subscription_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootProfile_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Profile_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Categories_Order_By>>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};


export type Subscription_RootProfile_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Categories_Order_By>>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};


export type Subscription_RootProfile_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProfile_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profile_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Profile_Categories_Bool_Exp>;
};


export type Subscription_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProvider_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Provider_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootTemplate_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Template_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Categories_Order_By>>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};


export type Subscription_RootTemplate_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Categories_Order_By>>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};


export type Subscription_RootTemplate_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTemplate_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Template_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};


export type Subscription_RootTemplate_TagsArgs = {
  distinct_on?: InputMaybe<Array<Template_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Tags_Order_By>>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};


export type Subscription_RootTemplate_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Tags_Order_By>>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};


export type Subscription_RootTemplate_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTemplate_Tags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Template_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};


export type Subscription_RootTemplatesArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


export type Subscription_RootTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


export type Subscription_RootTemplates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTemplates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Templates_Stream_Cursor_Input>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


export type Subscription_RootTokens_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Tokens_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_History_Order_By>>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};


export type Subscription_RootTokens_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_History_Order_By>>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};


export type Subscription_RootTokens_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTokens_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tokens_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWallets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Wallets_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** columns and relationships of "template_categories" */
export type Template_Categories = {
  __typename?: 'template_categories';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  templates: Array<Templates>;
  /** An aggregate relationship */
  templates_aggregate: Templates_Aggregate;
  titile?: Maybe<Scalars['String']['output']>;
  ui_lg_c?: Maybe<Scalars['Int']['output']>;
  ui_lg_w?: Maybe<Scalars['Int']['output']>;
  ui_sm_c?: Maybe<Scalars['String']['output']>;
  ui_sm_w?: Maybe<Scalars['Int']['output']>;
  ui_table_c?: Maybe<Scalars['Int']['output']>;
  ui_table_w?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "template_categories" */
export type Template_CategoriesTemplatesArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};


/** columns and relationships of "template_categories" */
export type Template_CategoriesTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Templates_Order_By>>;
  where?: InputMaybe<Templates_Bool_Exp>;
};

/** aggregated selection of "template_categories" */
export type Template_Categories_Aggregate = {
  __typename?: 'template_categories_aggregate';
  aggregate?: Maybe<Template_Categories_Aggregate_Fields>;
  nodes: Array<Template_Categories>;
};

/** aggregate fields of "template_categories" */
export type Template_Categories_Aggregate_Fields = {
  __typename?: 'template_categories_aggregate_fields';
  avg?: Maybe<Template_Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Template_Categories_Max_Fields>;
  min?: Maybe<Template_Categories_Min_Fields>;
  stddev?: Maybe<Template_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Template_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Template_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Template_Categories_Sum_Fields>;
  var_pop?: Maybe<Template_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Template_Categories_Var_Samp_Fields>;
  variance?: Maybe<Template_Categories_Variance_Fields>;
};


/** aggregate fields of "template_categories" */
export type Template_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Template_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Template_Categories_Avg_Fields = {
  __typename?: 'template_categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "template_categories". All fields are combined with a logical 'AND'. */
export type Template_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Template_Categories_Bool_Exp>>;
  _not?: InputMaybe<Template_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Template_Categories_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  templates?: InputMaybe<Templates_Bool_Exp>;
  templates_aggregate?: InputMaybe<Templates_Aggregate_Bool_Exp>;
  titile?: InputMaybe<String_Comparison_Exp>;
  ui_lg_c?: InputMaybe<Int_Comparison_Exp>;
  ui_lg_w?: InputMaybe<Int_Comparison_Exp>;
  ui_sm_c?: InputMaybe<String_Comparison_Exp>;
  ui_sm_w?: InputMaybe<Int_Comparison_Exp>;
  ui_table_c?: InputMaybe<Int_Comparison_Exp>;
  ui_table_w?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "template_categories" */
export enum Template_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  TemplateCategoriesPkey = 'template_categories_pkey'
}

/** input type for incrementing numeric columns in table "template_categories" */
export type Template_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ui_lg_c?: InputMaybe<Scalars['Int']['input']>;
  ui_lg_w?: InputMaybe<Scalars['Int']['input']>;
  ui_sm_w?: InputMaybe<Scalars['Int']['input']>;
  ui_table_c?: InputMaybe<Scalars['Int']['input']>;
  ui_table_w?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "template_categories" */
export type Template_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  templates?: InputMaybe<Templates_Arr_Rel_Insert_Input>;
  titile?: InputMaybe<Scalars['String']['input']>;
  ui_lg_c?: InputMaybe<Scalars['Int']['input']>;
  ui_lg_w?: InputMaybe<Scalars['Int']['input']>;
  ui_sm_c?: InputMaybe<Scalars['String']['input']>;
  ui_sm_w?: InputMaybe<Scalars['Int']['input']>;
  ui_table_c?: InputMaybe<Scalars['Int']['input']>;
  ui_table_w?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Template_Categories_Max_Fields = {
  __typename?: 'template_categories_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  titile?: Maybe<Scalars['String']['output']>;
  ui_lg_c?: Maybe<Scalars['Int']['output']>;
  ui_lg_w?: Maybe<Scalars['Int']['output']>;
  ui_sm_c?: Maybe<Scalars['String']['output']>;
  ui_sm_w?: Maybe<Scalars['Int']['output']>;
  ui_table_c?: Maybe<Scalars['Int']['output']>;
  ui_table_w?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Template_Categories_Min_Fields = {
  __typename?: 'template_categories_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  titile?: Maybe<Scalars['String']['output']>;
  ui_lg_c?: Maybe<Scalars['Int']['output']>;
  ui_lg_w?: Maybe<Scalars['Int']['output']>;
  ui_sm_c?: Maybe<Scalars['String']['output']>;
  ui_sm_w?: Maybe<Scalars['Int']['output']>;
  ui_table_c?: Maybe<Scalars['Int']['output']>;
  ui_table_w?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "template_categories" */
export type Template_Categories_Mutation_Response = {
  __typename?: 'template_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Template_Categories>;
};

/** input type for inserting object relation for remote table "template_categories" */
export type Template_Categories_Obj_Rel_Insert_Input = {
  data: Template_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Template_Categories_On_Conflict>;
};

/** on_conflict condition type for table "template_categories" */
export type Template_Categories_On_Conflict = {
  constraint: Template_Categories_Constraint;
  update_columns?: Array<Template_Categories_Update_Column>;
  where?: InputMaybe<Template_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "template_categories". */
export type Template_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  templates_aggregate?: InputMaybe<Templates_Aggregate_Order_By>;
  titile?: InputMaybe<Order_By>;
  ui_lg_c?: InputMaybe<Order_By>;
  ui_lg_w?: InputMaybe<Order_By>;
  ui_sm_c?: InputMaybe<Order_By>;
  ui_sm_w?: InputMaybe<Order_By>;
  ui_table_c?: InputMaybe<Order_By>;
  ui_table_w?: InputMaybe<Order_By>;
};

/** primary key columns input for table: template_categories */
export type Template_Categories_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "template_categories" */
export enum Template_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Titile = 'titile',
  /** column name */
  UiLgC = 'ui_lg_c',
  /** column name */
  UiLgW = 'ui_lg_w',
  /** column name */
  UiSmC = 'ui_sm_c',
  /** column name */
  UiSmW = 'ui_sm_w',
  /** column name */
  UiTableC = 'ui_table_c',
  /** column name */
  UiTableW = 'ui_table_w'
}

/** input type for updating data in table "template_categories" */
export type Template_Categories_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  titile?: InputMaybe<Scalars['String']['input']>;
  ui_lg_c?: InputMaybe<Scalars['Int']['input']>;
  ui_lg_w?: InputMaybe<Scalars['Int']['input']>;
  ui_sm_c?: InputMaybe<Scalars['String']['input']>;
  ui_sm_w?: InputMaybe<Scalars['Int']['input']>;
  ui_table_c?: InputMaybe<Scalars['Int']['input']>;
  ui_table_w?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Template_Categories_Stddev_Fields = {
  __typename?: 'template_categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Template_Categories_Stddev_Pop_Fields = {
  __typename?: 'template_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Template_Categories_Stddev_Samp_Fields = {
  __typename?: 'template_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "template_categories" */
export type Template_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Template_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Template_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  titile?: InputMaybe<Scalars['String']['input']>;
  ui_lg_c?: InputMaybe<Scalars['Int']['input']>;
  ui_lg_w?: InputMaybe<Scalars['Int']['input']>;
  ui_sm_c?: InputMaybe<Scalars['String']['input']>;
  ui_sm_w?: InputMaybe<Scalars['Int']['input']>;
  ui_table_c?: InputMaybe<Scalars['Int']['input']>;
  ui_table_w?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Template_Categories_Sum_Fields = {
  __typename?: 'template_categories_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  ui_lg_c?: Maybe<Scalars['Int']['output']>;
  ui_lg_w?: Maybe<Scalars['Int']['output']>;
  ui_sm_w?: Maybe<Scalars['Int']['output']>;
  ui_table_c?: Maybe<Scalars['Int']['output']>;
  ui_table_w?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "template_categories" */
export enum Template_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Titile = 'titile',
  /** column name */
  UiLgC = 'ui_lg_c',
  /** column name */
  UiLgW = 'ui_lg_w',
  /** column name */
  UiSmC = 'ui_sm_c',
  /** column name */
  UiSmW = 'ui_sm_w',
  /** column name */
  UiTableC = 'ui_table_c',
  /** column name */
  UiTableW = 'ui_table_w'
}

export type Template_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Template_Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Template_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Template_Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Template_Categories_Var_Pop_Fields = {
  __typename?: 'template_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Template_Categories_Var_Samp_Fields = {
  __typename?: 'template_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Template_Categories_Variance_Fields = {
  __typename?: 'template_categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ui_lg_c?: Maybe<Scalars['Float']['output']>;
  ui_lg_w?: Maybe<Scalars['Float']['output']>;
  ui_sm_w?: Maybe<Scalars['Float']['output']>;
  ui_table_c?: Maybe<Scalars['Float']['output']>;
  ui_table_w?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "template_tags" */
export type Template_Tags = {
  __typename?: 'template_tags';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "template_tags" */
export type Template_Tags_Aggregate = {
  __typename?: 'template_tags_aggregate';
  aggregate?: Maybe<Template_Tags_Aggregate_Fields>;
  nodes: Array<Template_Tags>;
};

/** aggregate fields of "template_tags" */
export type Template_Tags_Aggregate_Fields = {
  __typename?: 'template_tags_aggregate_fields';
  avg?: Maybe<Template_Tags_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Template_Tags_Max_Fields>;
  min?: Maybe<Template_Tags_Min_Fields>;
  stddev?: Maybe<Template_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Template_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Template_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Template_Tags_Sum_Fields>;
  var_pop?: Maybe<Template_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Template_Tags_Var_Samp_Fields>;
  variance?: Maybe<Template_Tags_Variance_Fields>;
};


/** aggregate fields of "template_tags" */
export type Template_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Template_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Template_Tags_Avg_Fields = {
  __typename?: 'template_tags_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "template_tags". All fields are combined with a logical 'AND'. */
export type Template_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Template_Tags_Bool_Exp>>;
  _not?: InputMaybe<Template_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Template_Tags_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "template_tags" */
export enum Template_Tags_Constraint {
  /** unique or primary key constraint on columns "id" */
  TemplateTagsPkey = 'template_tags_pkey'
}

/** input type for incrementing numeric columns in table "template_tags" */
export type Template_Tags_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "template_tags" */
export type Template_Tags_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Template_Tags_Max_Fields = {
  __typename?: 'template_tags_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Template_Tags_Min_Fields = {
  __typename?: 'template_tags_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "template_tags" */
export type Template_Tags_Mutation_Response = {
  __typename?: 'template_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Template_Tags>;
};

/** on_conflict condition type for table "template_tags" */
export type Template_Tags_On_Conflict = {
  constraint: Template_Tags_Constraint;
  update_columns?: Array<Template_Tags_Update_Column>;
  where?: InputMaybe<Template_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "template_tags". */
export type Template_Tags_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: template_tags */
export type Template_Tags_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "template_tags" */
export enum Template_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "template_tags" */
export type Template_Tags_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Template_Tags_Stddev_Fields = {
  __typename?: 'template_tags_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Template_Tags_Stddev_Pop_Fields = {
  __typename?: 'template_tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Template_Tags_Stddev_Samp_Fields = {
  __typename?: 'template_tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "template_tags" */
export type Template_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Template_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Template_Tags_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Template_Tags_Sum_Fields = {
  __typename?: 'template_tags_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "template_tags" */
export enum Template_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

export type Template_Tags_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Template_Tags_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Template_Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Template_Tags_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Template_Tags_Var_Pop_Fields = {
  __typename?: 'template_tags_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Template_Tags_Var_Samp_Fields = {
  __typename?: 'template_tags_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Template_Tags_Variance_Fields = {
  __typename?: 'template_tags_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "templates" */
export type Templates = {
  __typename?: 'templates';
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  directus_file?: Maybe<Directus_Files>;
  filelds?: Maybe<Scalars['json']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  template_category?: Maybe<Template_Categories>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "templates" */
export type TemplatesFileldsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "templates" */
export type Templates_Aggregate = {
  __typename?: 'templates_aggregate';
  aggregate?: Maybe<Templates_Aggregate_Fields>;
  nodes: Array<Templates>;
};

export type Templates_Aggregate_Bool_Exp = {
  count?: InputMaybe<Templates_Aggregate_Bool_Exp_Count>;
};

export type Templates_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Templates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Templates_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "templates" */
export type Templates_Aggregate_Fields = {
  __typename?: 'templates_aggregate_fields';
  avg?: Maybe<Templates_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Templates_Max_Fields>;
  min?: Maybe<Templates_Min_Fields>;
  stddev?: Maybe<Templates_Stddev_Fields>;
  stddev_pop?: Maybe<Templates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Templates_Stddev_Samp_Fields>;
  sum?: Maybe<Templates_Sum_Fields>;
  var_pop?: Maybe<Templates_Var_Pop_Fields>;
  var_samp?: Maybe<Templates_Var_Samp_Fields>;
  variance?: Maybe<Templates_Variance_Fields>;
};


/** aggregate fields of "templates" */
export type Templates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Templates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "templates" */
export type Templates_Aggregate_Order_By = {
  avg?: InputMaybe<Templates_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Templates_Max_Order_By>;
  min?: InputMaybe<Templates_Min_Order_By>;
  stddev?: InputMaybe<Templates_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Templates_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Templates_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Templates_Sum_Order_By>;
  var_pop?: InputMaybe<Templates_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Templates_Var_Samp_Order_By>;
  variance?: InputMaybe<Templates_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "templates" */
export type Templates_Arr_Rel_Insert_Input = {
  data: Array<Templates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Templates_On_Conflict>;
};

/** aggregate avg on columns */
export type Templates_Avg_Fields = {
  __typename?: 'templates_avg_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "templates" */
export type Templates_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "templates". All fields are combined with a logical 'AND'. */
export type Templates_Bool_Exp = {
  _and?: InputMaybe<Array<Templates_Bool_Exp>>;
  _not?: InputMaybe<Templates_Bool_Exp>;
  _or?: InputMaybe<Array<Templates_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  directus_file?: InputMaybe<Directus_Files_Bool_Exp>;
  filelds?: InputMaybe<Json_Comparison_Exp>;
  group_id?: InputMaybe<Int_Comparison_Exp>;
  icon?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  promt?: InputMaybe<String_Comparison_Exp>;
  template_category?: InputMaybe<Template_Categories_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "templates" */
export enum Templates_Constraint {
  /** unique or primary key constraint on columns "id" */
  TemplatesPkey = 'templates_pkey',
  /** unique or primary key constraint on columns "id" */
  TemplatesUidKey = 'templates_uid_key'
}

/** input type for incrementing numeric columns in table "templates" */
export type Templates_Inc_Input = {
  group_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "templates" */
export type Templates_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  directus_file?: InputMaybe<Directus_Files_Obj_Rel_Insert_Input>;
  filelds?: InputMaybe<Scalars['json']['input']>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  template_category?: InputMaybe<Template_Categories_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Templates_Max_Fields = {
  __typename?: 'templates_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "templates" */
export type Templates_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Templates_Min_Fields = {
  __typename?: 'templates_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  promt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "templates" */
export type Templates_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "templates" */
export type Templates_Mutation_Response = {
  __typename?: 'templates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Templates>;
};

/** on_conflict condition type for table "templates" */
export type Templates_On_Conflict = {
  constraint: Templates_Constraint;
  update_columns?: Array<Templates_Update_Column>;
  where?: InputMaybe<Templates_Bool_Exp>;
};

/** Ordering options when selecting data from "templates". */
export type Templates_Order_By = {
  description?: InputMaybe<Order_By>;
  directus_file?: InputMaybe<Directus_Files_Order_By>;
  filelds?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  promt?: InputMaybe<Order_By>;
  template_category?: InputMaybe<Template_Categories_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: templates */
export type Templates_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "templates" */
export enum Templates_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Filelds = 'filelds',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Promt = 'promt',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "templates" */
export type Templates_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  filelds?: InputMaybe<Scalars['json']['input']>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Templates_Stddev_Fields = {
  __typename?: 'templates_stddev_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "templates" */
export type Templates_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Templates_Stddev_Pop_Fields = {
  __typename?: 'templates_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "templates" */
export type Templates_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Templates_Stddev_Samp_Fields = {
  __typename?: 'templates_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "templates" */
export type Templates_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "templates" */
export type Templates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Templates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Templates_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  filelds?: InputMaybe<Scalars['json']['input']>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Templates_Sum_Fields = {
  __typename?: 'templates_sum_fields';
  group_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "templates" */
export type Templates_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** update columns of table "templates" */
export enum Templates_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Filelds = 'filelds',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Promt = 'promt',
  /** column name */
  Title = 'title'
}

export type Templates_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Templates_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Templates_Set_Input>;
  /** filter the rows which have to be updated */
  where: Templates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Templates_Var_Pop_Fields = {
  __typename?: 'templates_var_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "templates" */
export type Templates_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Templates_Var_Samp_Fields = {
  __typename?: 'templates_var_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "templates" */
export type Templates_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Templates_Variance_Fields = {
  __typename?: 'templates_variance_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "templates" */
export type Templates_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "tokens_history" */
export type Tokens_History = {
  __typename?: 'tokens_history';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  date: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  tokens: Scalars['Int']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "tokens_history" */
export type Tokens_History_Aggregate = {
  __typename?: 'tokens_history_aggregate';
  aggregate?: Maybe<Tokens_History_Aggregate_Fields>;
  nodes: Array<Tokens_History>;
};

/** aggregate fields of "tokens_history" */
export type Tokens_History_Aggregate_Fields = {
  __typename?: 'tokens_history_aggregate_fields';
  avg?: Maybe<Tokens_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tokens_History_Max_Fields>;
  min?: Maybe<Tokens_History_Min_Fields>;
  stddev?: Maybe<Tokens_History_Stddev_Fields>;
  stddev_pop?: Maybe<Tokens_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tokens_History_Stddev_Samp_Fields>;
  sum?: Maybe<Tokens_History_Sum_Fields>;
  var_pop?: Maybe<Tokens_History_Var_Pop_Fields>;
  var_samp?: Maybe<Tokens_History_Var_Samp_Fields>;
  variance?: Maybe<Tokens_History_Variance_Fields>;
};


/** aggregate fields of "tokens_history" */
export type Tokens_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tokens_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tokens_History_Avg_Fields = {
  __typename?: 'tokens_history_avg_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "tokens_history". All fields are combined with a logical 'AND'. */
export type Tokens_History_Bool_Exp = {
  _and?: InputMaybe<Array<Tokens_History_Bool_Exp>>;
  _not?: InputMaybe<Tokens_History_Bool_Exp>;
  _or?: InputMaybe<Array<Tokens_History_Bool_Exp>>;
  additional_tokens?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tokens_history" */
export enum Tokens_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokensHistoryPkey = 'tokens_history_pkey'
}

/** input type for incrementing numeric columns in table "tokens_history" */
export type Tokens_History_Inc_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "tokens_history" */
export type Tokens_History_Insert_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Tokens_History_Max_Fields = {
  __typename?: 'tokens_history_max_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Tokens_History_Min_Fields = {
  __typename?: 'tokens_history_min_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "tokens_history" */
export type Tokens_History_Mutation_Response = {
  __typename?: 'tokens_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tokens_History>;
};

/** on_conflict condition type for table "tokens_history" */
export type Tokens_History_On_Conflict = {
  constraint: Tokens_History_Constraint;
  update_columns?: Array<Tokens_History_Update_Column>;
  where?: InputMaybe<Tokens_History_Bool_Exp>;
};

/** Ordering options when selecting data from "tokens_history". */
export type Tokens_History_Order_By = {
  additional_tokens?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tokens_history */
export type Tokens_History_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tokens_history" */
export enum Tokens_History_Select_Column {
  /** column name */
  AdditionalTokens = 'additional_tokens',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tokens_history" */
export type Tokens_History_Set_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Tokens_History_Stddev_Fields = {
  __typename?: 'tokens_history_stddev_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tokens_History_Stddev_Pop_Fields = {
  __typename?: 'tokens_history_stddev_pop_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tokens_History_Stddev_Samp_Fields = {
  __typename?: 'tokens_history_stddev_samp_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "tokens_history" */
export type Tokens_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tokens_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tokens_History_Stream_Cursor_Value_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Tokens_History_Sum_Fields = {
  __typename?: 'tokens_history_sum_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "tokens_history" */
export enum Tokens_History_Update_Column {
  /** column name */
  AdditionalTokens = 'additional_tokens',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UserId = 'user_id'
}

export type Tokens_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tokens_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tokens_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tokens_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tokens_History_Var_Pop_Fields = {
  __typename?: 'tokens_history_var_pop_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tokens_History_Var_Samp_Fields = {
  __typename?: 'tokens_history_var_samp_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tokens_History_Variance_Fields = {
  __typename?: 'tokens_history_variance_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  accounts?: Maybe<Accounts>;
  ai_text_model?: Maybe<Scalars['String']['output']>;
  card_token?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  date_end_plan?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_client?: Maybe<Scalars['Boolean']['output']>;
  is_former_client?: Maybe<Scalars['Boolean']['output']>;
  is_subscriber?: Maybe<Scalars['Boolean']['output']>;
  is_year_sub?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  subscription_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "users" */
export type UsersChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  ai_text_model?: InputMaybe<String_Comparison_Exp>;
  card_token?: InputMaybe<String_Comparison_Exp>;
  chats?: InputMaybe<Chats_Bool_Exp>;
  chats_aggregate?: InputMaybe<Chats_Aggregate_Bool_Exp>;
  date_end_plan?: InputMaybe<Timestamptz_Comparison_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  is_client?: InputMaybe<Boolean_Comparison_Exp>;
  is_former_client?: InputMaybe<Boolean_Comparison_Exp>;
  is_subscriber?: InputMaybe<Boolean_Comparison_Exp>;
  is_year_sub?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  subscription_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  ai_text_model?: InputMaybe<Scalars['String']['input']>;
  card_token?: InputMaybe<Scalars['String']['input']>;
  chats?: InputMaybe<Chats_Arr_Rel_Insert_Input>;
  date_end_plan?: InputMaybe<Scalars['timestamptz']['input']>;
  documents?: InputMaybe<Documents_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_former_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscriber?: InputMaybe<Scalars['Boolean']['input']>;
  is_year_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  subscription_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  ai_text_model?: Maybe<Scalars['String']['output']>;
  card_token?: Maybe<Scalars['String']['output']>;
  date_end_plan?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['uuid']['output']>;
  subscription_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  ai_text_model?: Maybe<Scalars['String']['output']>;
  card_token?: Maybe<Scalars['String']['output']>;
  date_end_plan?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['uuid']['output']>;
  subscription_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts?: InputMaybe<Accounts_Order_By>;
  ai_text_model?: InputMaybe<Order_By>;
  card_token?: InputMaybe<Order_By>;
  chats_aggregate?: InputMaybe<Chats_Aggregate_Order_By>;
  date_end_plan?: InputMaybe<Order_By>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  is_client?: InputMaybe<Order_By>;
  is_former_client?: InputMaybe<Order_By>;
  is_subscriber?: InputMaybe<Order_By>;
  is_year_sub?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  subscription_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AiTextModel = 'ai_text_model',
  /** column name */
  CardToken = 'card_token',
  /** column name */
  DateEndPlan = 'date_end_plan',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsClient = 'is_client',
  /** column name */
  IsFormerClient = 'is_former_client',
  /** column name */
  IsSubscriber = 'is_subscriber',
  /** column name */
  IsYearSub = 'is_year_sub',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  SubscriptionId = 'subscription_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  ai_text_model?: InputMaybe<Scalars['String']['input']>;
  card_token?: InputMaybe<Scalars['String']['input']>;
  date_end_plan?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_former_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscriber?: InputMaybe<Scalars['Boolean']['input']>;
  is_year_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  subscription_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  ai_text_model?: InputMaybe<Scalars['String']['input']>;
  card_token?: InputMaybe<Scalars['String']['input']>;
  date_end_plan?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_former_client?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscriber?: InputMaybe<Scalars['Boolean']['input']>;
  is_year_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  subscription_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AiTextModel = 'ai_text_model',
  /** column name */
  CardToken = 'card_token',
  /** column name */
  DateEndPlan = 'date_end_plan',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsClient = 'is_client',
  /** column name */
  IsFormerClient = 'is_former_client',
  /** column name */
  IsSubscriber = 'is_subscriber',
  /** column name */
  IsYearSub = 'is_year_sub',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  SubscriptionId = 'subscription_id'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires: Scalars['timestamptz']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String']['input'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

/** columns and relationships of "wallets" */
export type Wallets = {
  __typename?: 'wallets';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  last_use: Scalars['timestamptz']['output'];
  tokens: Scalars['Int']['output'];
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  users?: Maybe<Users>;
};

/** aggregated selection of "wallets" */
export type Wallets_Aggregate = {
  __typename?: 'wallets_aggregate';
  aggregate?: Maybe<Wallets_Aggregate_Fields>;
  nodes: Array<Wallets>;
};

/** aggregate fields of "wallets" */
export type Wallets_Aggregate_Fields = {
  __typename?: 'wallets_aggregate_fields';
  avg?: Maybe<Wallets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Wallets_Max_Fields>;
  min?: Maybe<Wallets_Min_Fields>;
  stddev?: Maybe<Wallets_Stddev_Fields>;
  stddev_pop?: Maybe<Wallets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wallets_Stddev_Samp_Fields>;
  sum?: Maybe<Wallets_Sum_Fields>;
  var_pop?: Maybe<Wallets_Var_Pop_Fields>;
  var_samp?: Maybe<Wallets_Var_Samp_Fields>;
  variance?: Maybe<Wallets_Variance_Fields>;
};


/** aggregate fields of "wallets" */
export type Wallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Wallets_Avg_Fields = {
  __typename?: 'wallets_avg_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  _and?: InputMaybe<Array<Wallets_Bool_Exp>>;
  _not?: InputMaybe<Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<Wallets_Bool_Exp>>;
  additional_tokens?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_use?: InputMaybe<Timestamptz_Comparison_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "wallets" */
export enum Wallets_Constraint {
  /** unique or primary key constraint on columns "id" */
  WalletsPkey = 'wallets_pkey'
}

/** input type for incrementing numeric columns in table "wallets" */
export type Wallets_Inc_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "wallets" */
export type Wallets_Insert_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_use?: InputMaybe<Scalars['timestamptz']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Wallets_Max_Fields = {
  __typename?: 'wallets_max_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_use?: Maybe<Scalars['timestamptz']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Wallets_Min_Fields = {
  __typename?: 'wallets_min_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_use?: Maybe<Scalars['timestamptz']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "wallets" */
export type Wallets_Mutation_Response = {
  __typename?: 'wallets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallets>;
};

/** on_conflict condition type for table "wallets" */
export type Wallets_On_Conflict = {
  constraint: Wallets_Constraint;
  update_columns?: Array<Wallets_Update_Column>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** Ordering options when selecting data from "wallets". */
export type Wallets_Order_By = {
  additional_tokens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_use?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: wallets */
export type Wallets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "wallets" */
export enum Wallets_Select_Column {
  /** column name */
  AdditionalTokens = 'additional_tokens',
  /** column name */
  Id = 'id',
  /** column name */
  LastUse = 'last_use',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "wallets" */
export type Wallets_Set_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_use?: InputMaybe<Scalars['timestamptz']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Wallets_Stddev_Fields = {
  __typename?: 'wallets_stddev_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Wallets_Stddev_Pop_Fields = {
  __typename?: 'wallets_stddev_pop_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Wallets_Stddev_Samp_Fields = {
  __typename?: 'wallets_stddev_samp_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "wallets" */
export type Wallets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallets_Stream_Cursor_Value_Input = {
  additional_tokens?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_use?: InputMaybe<Scalars['timestamptz']['input']>;
  tokens?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Wallets_Sum_Fields = {
  __typename?: 'wallets_sum_fields';
  additional_tokens?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "wallets" */
export enum Wallets_Update_Column {
  /** column name */
  AdditionalTokens = 'additional_tokens',
  /** column name */
  Id = 'id',
  /** column name */
  LastUse = 'last_use',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UserId = 'user_id'
}

export type Wallets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Wallets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wallets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Wallets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Wallets_Var_Pop_Fields = {
  __typename?: 'wallets_var_pop_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Wallets_Var_Samp_Fields = {
  __typename?: 'wallets_var_samp_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Wallets_Variance_Fields = {
  __typename?: 'wallets_variance_fields';
  additional_tokens?: Maybe<Scalars['Float']['output']>;
  tokens?: Maybe<Scalars['Float']['output']>;
};

export type GetUserHistoryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserHistoryQuery = { __typename?: 'query_root', payment_history: Array<{ __typename?: 'payment_history', transaction_id: number, date: any, plan?: string | null, card?: string | null, four_last?: string | null, card_exp_date?: string | null, amount?: number | null, status: number }> };

export type GetPlanCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlanCategoriesQuery = { __typename?: 'query_root', plan_categories: Array<{ __typename?: 'plan_categories', icon?: string | null, id: number, name?: string | null, title?: string | null }> };

export type GetPlanInfoQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetPlanInfoQuery = { __typename?: 'query_root', plans_by_pk?: { __typename?: 'plans', name: string, price: number, tokens: number } | null };

export type GetPlanUserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetPlanUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', date_end_plan?: any | null, plan_id?: any | null } | null };

export type GetUserInfoQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserInfoQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', ai_text_model?: string | null, plan_id?: any | null, is_client?: boolean | null, is_subscriber?: boolean | null }> };

export type GetUserSubscriptionIdQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserSubscriptionIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', subscription_id?: string | null }> };

export type GetProfileCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileCategoriesQuery = { __typename?: 'query_root', profile_categories: Array<{ __typename?: 'profile_categories', title: string, name?: any | null, id: number }> };

export type AddNewMessageMutationVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content: Scalars['String']['input'];
  data?: InputMaybe<Scalars['json']['input']>;
  role: Scalars['String']['input'];
}>;


export type AddNewMessageMutation = { __typename?: 'mutation_root', insert_messages_one?: { __typename?: 'messages', id: any } | null };

export type CreateChatMutationVariables = Exact<{
  model?: InputMaybe<Scalars['String']['input']>;
  system_promt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['uuid']['input'];
}>;


export type CreateChatMutation = { __typename?: 'mutation_root', insert_chats_one?: { __typename?: 'chats', id: any } | null };

export type DeleteChatByIdMutationVariables = Exact<{
  chatId: Scalars['uuid']['input'];
}>;


export type DeleteChatByIdMutation = { __typename?: 'mutation_root', delete_chats?: { __typename?: 'chats_mutation_response', returning: Array<{ __typename?: 'chats', id: any, title?: string | null }> } | null };

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['uuid']['input'];
}>;


export type DeleteMessageMutation = { __typename?: 'mutation_root', delete_messages_by_pk?: { __typename?: 'messages', id: any } | null };

export type ChangeAiTextModelMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  model: Scalars['String']['input'];
}>;


export type ChangeAiTextModelMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, ai_text_model?: string | null }> } | null };

export type UpdateChatMutationVariables = Exact<{
  chatId: Scalars['uuid']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateChatMutation = { __typename?: 'mutation_root', update_chats?: { __typename?: 'chats_mutation_response', returning: Array<{ __typename?: 'chats', id: any }> } | null };

export type EditMessageMutationVariables = Exact<{
  messageId: Scalars['uuid']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
}>;


export type EditMessageMutation = { __typename?: 'mutation_root', update_messages_by_pk?: { __typename?: 'messages', id: any } | null };

export type GetAllChatMessagesQueryVariables = Exact<{
  chatId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetAllChatMessagesQuery = { __typename?: 'query_root', messages: Array<{ __typename?: 'messages', chatId: any, content?: string | null, data?: any | null, id: any, role?: string | null, createdAt?: any | null }> };

export type GetChatByIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']['input']>;
  chatId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetChatByIdQuery = { __typename?: 'query_root', chats: Array<{ __typename?: 'chats', description?: string | null, icon?: any | null, model?: string | null, id: any, system_promt?: string | null, title?: string | null }> };

export type GetChatsByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']['input']> | Scalars['uuid']['input']>;
  userId: Scalars['uuid']['input'];
}>;


export type GetChatsByIdsQuery = { __typename?: 'query_root', chats: Array<{ __typename?: 'chats', id: any, title?: string | null, description?: string | null }> };

export type GetChatHistoryWeaviateQueryVariables = Exact<{
  query: Scalars['String']['input'];
  userId: Scalars['TextGetObjectsChatsWeaviate']['input'];
}>;


export type GetChatHistoryWeaviateQuery = { __typename?: 'query_root', Get?: { __typename?: 'GetObjectsObj', ChatsWeaviate?: Array<{ __typename?: 'ChatsWeaviate', title?: string | null, userId?: string | null, _additional?: { __typename?: 'ChatsWeaviateAdditional', id?: string | null } | null } | null> | null } | null };

export type GetCurrentPromtQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCurrentPromtQuery = { __typename?: 'query_root', roles: Array<{ __typename?: 'roles', promt?: string | null, title: string, id: any, name?: string | null, directus_img?: { __typename?: 'directus_files', filename_disk?: string | null } | null }> };

export type GetMyChatsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
  value: Scalars['String']['input'];
}>;


export type GetMyChatsQuery = { __typename?: 'query_root', chats: Array<{ __typename?: 'chats', id: any, createdAt?: any | null, title?: string | null, description?: string | null, system_promt?: string | null }> };

export type GetRolesWithTitleFilterQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type GetRolesWithTitleFilterQuery = { __typename?: 'query_root', roles: Array<{ __typename?: 'roles', id: any, name?: string | null, title: string, type?: string | null, promt?: string | null, directus_img?: { __typename?: 'directus_files', filename_disk?: string | null } | null }> };

export type GetRolesWeaviateQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type GetRolesWeaviateQuery = { __typename?: 'query_root', Get?: { __typename?: 'GetObjectsObj', RolesWeaviate?: Array<{ __typename?: 'RolesWeaviate', title?: string | null, name?: string | null, _additional?: { __typename?: 'RolesWeaviateAdditional', id?: string | null } | null } | null> | null } | null };

export type GetAiCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAiCategoriesQuery = { __typename?: 'query_root', ai_categories: Array<{ __typename?: 'ai_categories', id: number, title: string, icon?: string | null }> };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'query_root', roles: Array<{ __typename?: 'roles', id: any, image?: any | null, image_min?: any | null, name?: string | null, promt?: string | null, title: string, type?: string | null }> };

export type GetTemplateCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTemplateCategoriesQuery = { __typename?: 'query_root', template_categories: Array<{ __typename?: 'template_categories', id: number, name?: string | null, titile?: string | null, ui_lg_c?: number | null, ui_lg_w?: number | null, ui_sm_c?: string | null, ui_sm_w?: number | null, ui_table_c?: number | null, ui_table_w?: number | null, templates: Array<{ __typename?: 'templates', id: any, name?: string | null, title?: string | null, icon?: any | null }> }> };

export type GetTemplateTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTemplateTagsQuery = { __typename?: 'query_root', template_tags: Array<{ __typename?: 'template_tags', id: number, name?: string | null, title?: string | null }> };

export type UserWalletSubscriptionVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type UserWalletSubscription = { __typename?: 'subscription_root', wallets: Array<{ __typename?: 'wallets', tokens: number, user_id: any, additional_tokens?: number | null }> };


export const GetUserHistoryDocument = gql`
    query GetUserHistory($userId: uuid!) {
  payment_history(where: {user_id: {_eq: $userId}}) {
    transaction_id
    date
    plan
    card
    four_last
    card_exp_date
    amount
    status
  }
}
    `;
export const GetPlanCategoriesDocument = gql`
    query GetPlanCategories {
  plan_categories {
    icon
    id
    name
    title
  }
}
    `;
export const GetPlanInfoDocument = gql`
    query GetPlanInfo($id: uuid!) {
  plans_by_pk(id: $id) {
    name
    price
    tokens
  }
}
    `;
export const GetPlanUserDocument = gql`
    query GetPlanUser($id: uuid!) {
  users_by_pk(id: $id) {
    date_end_plan
    plan_id
  }
}
    `;
export const GetUserInfoDocument = gql`
    query GetUserInfo($userId: uuid!) {
  users(where: {id: {_eq: $userId}}) {
    ai_text_model
    plan_id
    is_client
    is_subscriber
  }
}
    `;
export const GetUserSubscriptionIdDocument = gql`
    query GetUserSubscriptionId($userId: uuid!) {
  users(where: {id: {_eq: $userId}}) {
    subscription_id
  }
}
    `;
export const GetProfileCategoriesDocument = gql`
    query GetProfileCategories {
  profile_categories {
    title
    name
    id
  }
}
    `;
export const AddNewMessageDocument = gql`
    mutation AddNewMessage($chatId: uuid, $content: String!, $data: json, $role: String!) {
  insert_messages_one(
    object: {chatId: $chatId, content: $content, data: $data, role: $role}
  ) {
    id
  }
}
    `;
export const CreateChatDocument = gql`
    mutation CreateChat($model: String, $system_promt: String, $title: String, $userId: uuid!) {
  insert_chats_one(
    object: {model: $model, system_promt: $system_promt, title: $title, userId: $userId}
  ) {
    id
  }
}
    `;
export const DeleteChatByIdDocument = gql`
    mutation DeleteChatById($chatId: uuid!) {
  delete_chats(where: {id: {_eq: $chatId}}) {
    returning {
      id
      title
    }
  }
}
    `;
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($messageId: uuid!) {
  delete_messages_by_pk(id: $messageId) {
    id
  }
}
    `;
export const ChangeAiTextModelDocument = gql`
    mutation ChangeAiTextModel($userId: uuid!, $model: String!) {
  update_users(where: {id: {_eq: $userId}}, _set: {ai_text_model: $model}) {
    affected_rows
    returning {
      id
      ai_text_model
    }
  }
}
    `;
export const UpdateChatDocument = gql`
    mutation UpdateChat($chatId: uuid!, $title: String, $model: String, $description: String) {
  update_chats(
    where: {id: {_eq: $chatId}}
    _set: {title: $title, model: $model, description: $description}
  ) {
    returning {
      id
    }
  }
}
    `;
export const EditMessageDocument = gql`
    mutation EditMessage($messageId: uuid!, $content: String, $data: json) {
  update_messages_by_pk(
    pk_columns: {id: $messageId}
    _set: {content: $content, data: $data}
  ) {
    id
  }
}
    `;
export const GetAllChatMessagesDocument = gql`
    query GetAllChatMessages($chatId: uuid) {
  messages(where: {chatId: {_eq: $chatId}}, order_by: {createdAt: asc}) {
    chatId
    content
    data
    id
    role
    createdAt
  }
}
    `;
export const GetChatByIdDocument = gql`
    query GetChatById($userId: uuid, $chatId: uuid) {
  chats(where: {id: {_eq: $chatId}, _and: {userId: {_eq: $userId}}}) {
    description
    icon
    model
    id
    system_promt
    title
  }
}
    `;
export const GetChatsByIdsDocument = gql`
    query GetChatsByIds($ids: [uuid!], $userId: uuid!) {
  chats(where: {id: {_in: $ids}, _and: {userId: {_eq: $userId}}}) {
    id
    title
    description
  }
}
    `;
export const GetChatHistoryWeaviateDocument = gql`
    query GetChatHistoryWeaviate($query: String!, $userId: TextGetObjectsChatsWeaviate!) {
  Get {
    ChatsWeaviate(
      hybrid: {query: $query, properties: ["title"]}
      limit: 3
      where: {path: ["userId"], operator: Equal, valueText: $userId}
    ) {
      _additional {
        id
      }
      title
      userId
    }
  }
}
    `;
export const GetCurrentPromtDocument = gql`
    query GetCurrentPromt($name: String) {
  roles(where: {name: {_eq: $name}}) {
    promt
    title
    id
    name
    directus_img {
      filename_disk
    }
  }
}
    `;
export const GetMyChatsDocument = gql`
    query GetMyChats($userId: uuid!, $value: String!) {
  chats(
    where: {userId: {_eq: $userId}, _and: {title: {_iregex: $value}}}
    order_by: {createdAt: desc}
  ) {
    id
    createdAt
    title
    description
    system_promt
  }
}
    `;
export const GetRolesWithTitleFilterDocument = gql`
    query GetRolesWithTitleFilter($title: String!) {
  roles(where: {title: {_iregex: $title}}) {
    id
    name
    title
    type
    promt
    directus_img {
      filename_disk
    }
  }
}
    `;
export const GetRolesWeaviateDocument = gql`
    query GetRolesWeaviate($query: String!) {
  Get {
    RolesWeaviate(hybrid: {query: $query, properties: ["title"]}, limit: 3) {
      _additional {
        id
      }
      title
      name
    }
  }
}
    `;
export const GetAiCategoriesDocument = gql`
    query GetAiCategories {
  ai_categories {
    id
    title
    icon
  }
}
    `;
export const GetRolesDocument = gql`
    query GetRoles @cached(ttl: 1) {
  roles {
    id
    image
    image_min
    name
    promt
    title
    type
  }
}
    `;
export const GetTemplateCategoriesDocument = gql`
    query GetTemplateCategories @cached(ttl: 1) {
  template_categories(order_by: {id: asc}) {
    id
    name
    titile
    templates {
      id
      name
      title
      icon
    }
    ui_lg_c
    ui_lg_w
    ui_sm_c
    ui_sm_w
    ui_table_c
    ui_table_w
  }
}
    `;
export const GetTemplateTagsDocument = gql`
    query GetTemplateTags @cached(ttl: 1) {
  template_tags {
    id
    name
    title
  }
}
    `;
export const UserWalletDocument = gql`
    subscription UserWallet($userId: uuid!) {
  wallets(where: {user_id: {_eq: $userId}}) {
    tokens
    user_id
    additional_tokens
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUserHistory(variables: GetUserHistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserHistoryQuery>(GetUserHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserHistory', 'query', variables);
    },
    GetPlanCategories(variables?: GetPlanCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPlanCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlanCategoriesQuery>(GetPlanCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlanCategories', 'query', variables);
    },
    GetPlanInfo(variables: GetPlanInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPlanInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlanInfoQuery>(GetPlanInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlanInfo', 'query', variables);
    },
    GetPlanUser(variables: GetPlanUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPlanUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlanUserQuery>(GetPlanUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlanUser', 'query', variables);
    },
    GetUserInfo(variables: GetUserInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserInfoQuery>(GetUserInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserInfo', 'query', variables);
    },
    GetUserSubscriptionId(variables: GetUserSubscriptionIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserSubscriptionIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserSubscriptionIdQuery>(GetUserSubscriptionIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserSubscriptionId', 'query', variables);
    },
    GetProfileCategories(variables?: GetProfileCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProfileCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProfileCategoriesQuery>(GetProfileCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProfileCategories', 'query', variables);
    },
    AddNewMessage(variables: AddNewMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddNewMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddNewMessageMutation>(AddNewMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddNewMessage', 'mutation', variables);
    },
    CreateChat(variables: CreateChatMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateChatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateChatMutation>(CreateChatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateChat', 'mutation', variables);
    },
    DeleteChatById(variables: DeleteChatByIdMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteChatByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteChatByIdMutation>(DeleteChatByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteChatById', 'mutation', variables);
    },
    DeleteMessage(variables: DeleteMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteMessageMutation>(DeleteMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteMessage', 'mutation', variables);
    },
    ChangeAiTextModel(variables: ChangeAiTextModelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChangeAiTextModelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeAiTextModelMutation>(ChangeAiTextModelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ChangeAiTextModel', 'mutation', variables);
    },
    UpdateChat(variables: UpdateChatMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateChatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateChatMutation>(UpdateChatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateChat', 'mutation', variables);
    },
    EditMessage(variables: EditMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EditMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditMessageMutation>(EditMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EditMessage', 'mutation', variables);
    },
    GetAllChatMessages(variables?: GetAllChatMessagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllChatMessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllChatMessagesQuery>(GetAllChatMessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllChatMessages', 'query', variables);
    },
    GetChatById(variables?: GetChatByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetChatByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChatByIdQuery>(GetChatByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetChatById', 'query', variables);
    },
    GetChatsByIds(variables: GetChatsByIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetChatsByIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChatsByIdsQuery>(GetChatsByIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetChatsByIds', 'query', variables);
    },
    GetChatHistoryWeaviate(variables: GetChatHistoryWeaviateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetChatHistoryWeaviateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChatHistoryWeaviateQuery>(GetChatHistoryWeaviateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetChatHistoryWeaviate', 'query', variables);
    },
    GetCurrentPromt(variables?: GetCurrentPromtQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCurrentPromtQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCurrentPromtQuery>(GetCurrentPromtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCurrentPromt', 'query', variables);
    },
    GetMyChats(variables: GetMyChatsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMyChatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyChatsQuery>(GetMyChatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMyChats', 'query', variables);
    },
    GetRolesWithTitleFilter(variables: GetRolesWithTitleFilterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRolesWithTitleFilterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRolesWithTitleFilterQuery>(GetRolesWithTitleFilterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetRolesWithTitleFilter', 'query', variables);
    },
    GetRolesWeaviate(variables: GetRolesWeaviateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRolesWeaviateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRolesWeaviateQuery>(GetRolesWeaviateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetRolesWeaviate', 'query', variables);
    },
    GetAiCategories(variables?: GetAiCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAiCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAiCategoriesQuery>(GetAiCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAiCategories', 'query', variables);
    },
    GetRoles(variables?: GetRolesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRolesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRolesQuery>(GetRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetRoles', 'query', variables);
    },
    GetTemplateCategories(variables?: GetTemplateCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTemplateCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTemplateCategoriesQuery>(GetTemplateCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTemplateCategories', 'query', variables);
    },
    GetTemplateTags(variables?: GetTemplateTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTemplateTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTemplateTagsQuery>(GetTemplateTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTemplateTags', 'query', variables);
    },
    UserWallet(variables: UserWalletSubscriptionVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UserWalletSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserWalletSubscription>(UserWalletDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UserWallet', 'subscription', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;