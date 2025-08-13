import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const democicdpipeline = new CodePipeline(this, 'demopipeline', {
      pipelineName: 'demopipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('osakanaya/democicd', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

  }
}
