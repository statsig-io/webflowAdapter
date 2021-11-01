# webflowAdapter

This adapter allows Webflow projects to use Statsig's features like Feature Gates to control the user experience and run A/B tests.

## Instructions

1. Open *Project Settings* from the "W"/Hamburger menu on the top left of the designer.

![image](https://user-images.githubusercontent.com/74588208/139641798-c82246dd-7cf6-4767-a53d-a85c4c7b25d3.png)

2. Choose Custom Code Tab and paste the following in there.  Make sure to replace [CLIENT-SDK-KEY] with the right key that's available from your Statsig project settings.

```<script src="http://CDN/statsigWebflow.js?key=[CLIENT-SDK-KEY]"></script>```

![image](https://user-images.githubusercontent.com/74588208/139642155-78237417-b314-4256-a70e-acd79e0de129.png)

3. In the designer where you want to test two different user experiences, insert a Tab component

![image](https://user-images.githubusercontent.com/74588208/139642247-e7186c65-0a6b-423e-8014-efdda1a0eb76.png)

4. Select the newly inserted Tab and in the Settings pane, add a Custom Attribute *data-gateid* and set the value to be the Feature Gate Id. 

![image](https://user-images.githubusercontent.com/74588208/139642628-6765097c-4216-4e73-a0b5-ded56e5e37c8.png)

5. Now, add the controls in *Tab 1* for the default experience, and *Tab 2* for the new experience.

6. Test the page - changing the gate's targeting should be reflected in the experience when you refresh the page.  The tab headers will be automatically hidden away.

