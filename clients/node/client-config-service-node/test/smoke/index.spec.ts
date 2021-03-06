import { ConfigServiceClient } from "../../ConfigServiceClient";
import { DescribeConfigurationRecordersCommand } from "../../commands/DescribeConfigurationRecordersCommand";
import { GetResourceConfigHistoryCommand } from "../../commands/GetResourceConfigHistoryCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Config Service.");

  await (async () => {
    const client = new ConfigServiceClient({
      region: defaultRegion
    });

    const command = new DescribeConfigurationRecordersCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Config Service DescribeConfigurationRecorders - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Config Service DescribeConfigurationRecorders - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new ConfigServiceClient({
      region: defaultRegion
    });

    const command = new GetResourceConfigHistoryCommand({
      resourceType: "fake-type",
      resourceId: "fake-id"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Config Service GetResourceConfigHistory - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Config Service GetResourceConfigHistory - error expected from service"
      );
    }
  })();

  if (testFailed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// execute the test runner
smokeTestRunner();
