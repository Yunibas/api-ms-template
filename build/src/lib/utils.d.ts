declare const axios: any;
declare const PubSubAdapter: any;
declare const BASEURL = "https://us-central1-yunibas-prms-dev.cloudfunctions.net/schemavalidator-api";
declare type PublishMessageProps = {
    severity: string;
    tenant_ref: string;
    action: string;
    target_ref: string;
    request: Record<string, unknown> | string;
    response: Record<string, unknown> | string;
    success: boolean;
};
