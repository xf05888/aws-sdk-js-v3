import { CodeBuildClient } from "../../CodeBuildClient";
import { ListBuildsCommand } from "../../commands/ListBuildsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..1");
  console.log("# Running tests for CodeBuild.");

  await (async () => {
    const client = new CodeBuildClient({
      region: defaultRegion
    });

    const command = new ListBuildsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok CodeBuild ListBuilds - no error expected from service");
    } catch (err) {
      console.log(
        "not ok CodeBuild ListBuilds - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
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
