# webflowAdapter

This adapter allows Webflow projects to use Statsig Feature Gates to control the user experience and run A/B tests.

https://github.com/statsig-io/webflowAdapter/assets/111380336/7332f46c-8591-417c-ada7-8a3fc6e48d36

## Instructions

1. Open *Project Settings* from the "W"/Hamburger menu on the top left of the designer.

![image](https://user-images.githubusercontent.com/74588208/139641798-c82246dd-7cf6-4767-a53d-a85c4c7b25d3.png)

2. Choose Custom Code Tab and paste the following in there.  Make sure to replace [CLIENT-SDK-KEY] with the right key that's available from your Statsig project settings.

```<script src="https://cdn.jsdelivr.net/npm/webflow-statsig/dist/statsigWebflow.min.js?key=[CLIENT-SDK-KEY]"></script>```

![image](https://github.com/statsig-io/webflowAdapter/assets/111380336/5e3d3c78-b17c-438a-a7e1-b895697b9916)

3. In the designer where you want to test two different user experiences, insert a `Tabs` component

![image](https://user-images.githubusercontent.com/74588208/139642247-e7186c65-0a6b-423e-8014-efdda1a0eb76.png)

4. Select the newly inserted `Tabs` component and in the Settings pane, add a Custom Attribute *data-gateid* and set the value to be the Feature Gate Id. <br></br> *NOTE: Make sure you select the `Tabs` component, NOT the `Tabs Menu` or `Tabs Content`*

![image](https://user-images.githubusercontent.com/74588208/139642628-6765097c-4216-4e73-a0b5-ded56e5e37c8.png)

5. Hide the `Tabs Menu` so it's not visible to the user

![image](https://github.com/statsig-io/webflowAdapter/assets/111380336/1ec45912-22a9-49ca-ac40-df1c04c99296)

5. Now, add the controls in `Tab 1` for the default experience (**fails** gate), and `Tab 2` for the new experience (**passes** gate).

6. Publish and test the page! Changing the gate's targeting should be reflected in the experience when you refresh the page.

TIP: To properly run split assignments, make sure your Feature Gate uses `Stable ID` in order to treat your page visitors as unique users.
![image](https://github.com/statsig-io/webflowAdapter/assets/111380336/1b56747c-f075-4b9e-8c24-ce4ed9efb135)
