// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"95bp2oey03","name":"sampleCloudApi","description":"","endpoint":"https://95bp2oey03.execute-api.us-west-2.amazonaws.com/Development","region":"us-west-2","paths":["/items","/items/123"]},{"id":"327xt32g7l","name":"ToDoCRUD","description":"","endpoint":"https://327xt32g7l.execute-api.us-west-2.amazonaws.com/Development","region":"us-west-2","paths":["/ToDo","/ToDo/123"]}],
    'aws_cognito_identity_pool_id': 'us-west-2:c6957809-0e2a-46d3-9abd-dde67e21f06e',
    'aws_cognito_region': 'us-west-2',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'amplifyionicsample-hosting-mobilehub-1124756905',
    'aws_content_delivery_bucket_region': 'us-west-2',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd1ij2xjqixs1ad.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-west-2',
    'aws_dynamodb_table_schemas': [{"tableName":"amplifyionicsample-mobilehub-1124756905-AWSMobileTable","attributes":[{"name":"teamId","type":"S"},{"name":"personId","type":"S"},{"name":"email","type":"S"},{"name":"personName","type":"S"},{"name":"phone","type":"S"}],"indexes":[{"indexName":"personName-index","hashKey":"teamId","rangeKey":"personName"}],"region":"us-west-2","hashKey":"teamId","rangeKey":"personId"},{"tableName":"amplifyionicsample-mobilehub-1124756905-ToDo","attributes":[{"name":"userId","type":"S"},{"name":"items","type":"L"}],"indexes":[],"region":"us-west-2","hashKey":"userId"}],
    'aws_project_id': '7fac82ff-6c90-4565-b2cb-17a69b12756d',
    'aws_project_name': 'amplify-ionic-sample',
    'aws_project_region': 'us-west-2',
    'aws_resource_bucket_name': 'amplifyionicsample-deployments-mobilehub-1124756905',
    'aws_resource_name_prefix': 'amplifyionicsample-mobilehub-1124756905',
    'aws_sign_in_enabled': 'enable',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-west-2_oSBuA8kmn',
    'aws_user_pools_mfa_type': 'ON',
    'aws_user_pools_web_client_id': '631akljla8a083cemhak2m4u9l',
}

export default awsmobile;