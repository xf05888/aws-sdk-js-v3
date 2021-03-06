import { STSClient } from "../../STSClient";
import { GetSessionTokenCommand } from "../../commands/GetSessionTokenCommand";
import { GetFederationTokenCommand } from "../../commands/GetFederationTokenCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for STS.");

  await (async () => {
    const client = new STSClient({
      region: defaultRegion
    });

    const command = new GetSessionTokenCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok STS GetSessionToken - no error expected from service");
    } catch (err) {
      console.log(
        "not ok STS GetSessionToken - no error expected from service"
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
    const client = new STSClient({
      region: defaultRegion
    });

    const command = new GetFederationTokenCommand({
      Name: "temp",
      Policy: '{\\"temp\\":true}'
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok STS GetFederationToken - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok STS GetFederationToken - error expected from service");
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
