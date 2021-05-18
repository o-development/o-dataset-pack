import { createDataset } from "../lib";
import { quad, namedNode } from "@rdfjs/data-model";

describe("createExtendedDataset", () => {
  it("Creates a dataset with turtle", () => {
    const turtle = `
      @prefix : <#>.
      @prefix mee: <http://www.w3.org/ns/pim/meeting#>.
      @prefix XML: <http://www.w3.org/2001/XMLSchema#>.
      @prefix n5: <http://purl.org/dc/elements/1.1/>.
      @prefix c6: </profile/card#>.
      @prefix ui: <http://www.w3.org/ns/ui#>.
      @prefix ic: <http://www.w3.org/2002/12/cal/ical#>.
      @prefix flow: <http://www.w3.org/2005/01/wf/flow#>.
      
      :id1604448082795
          ic:dtstart "2020-11-04T00:01:22Z"^^XML:dateTime;
          flow:participant c6:me;
          ui:backgroundColor "#e1f7cd".
      :this
          a mee:LongChat;
          n5:author c6:me;
          n5:created "2020-11-04T00:01:20Z"^^XML:dateTime;
          n5:title "Chat channel";
          flow:participation :id1604448082795;
          ui:sharedPreferences :SharedPreferences.
    `;
    const dataset = createDataset(turtle, {
      baseIRI:
        "https://jackson.solidcommunity.net/IndividualChats/jackson.solidcommunity.net/index.ttl#",
    });
    expect(dataset.size).toBe(9);
    expect(
      dataset.has(
        quad(
          namedNode(
            "https://jackson.solidcommunity.net/IndividualChats/jackson.solidcommunity.net/index.ttl#id1604448082795"
          ),
          namedNode("http://www.w3.org/2005/01/wf/flow#participant"),
          namedNode("https://jackson.solidcommunity.net/profile/card#me")
        )
      )
    ).toBe(true);
  });
});
