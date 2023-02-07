<template>
  <div id="pinterest" class="p-8 bg-pinterest/5">
    <h3 class="text-pinterest mb-4">Pinterest</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="w-full">
        <h4 class="mb-3 font-medium">Usage</h4>
        <PinterestIcon
          title="This is the title"
          :url="url"
          isRounded
          class="mb-4"
        />
        <Code :code="code" language="html"/>
      </div>
      <div class="w-full">
        <h4 class="mb-2 font-medium">Props</h4>
        <p class="mb-3">With <span class="text-red-500">*</span> is required.</p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>description<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>Add the description</td>
                <td class="desc">
                  <span>The description of the button/link.</span>
                </td>
              </tr>
              <tr>
                <td>mediaUrl<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>#!</td>
                <td class="desc">
                  <span>The image of the button/link to share.</span>
                </td>
              </tr>
              <tr>
                <td>url<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>#!</td>
                <td class="desc">
                  <span>The url of the button/link to share.</span>
                </td>
              </tr>
              <tr>
                <td>isRounded</td>
                <td>Boolean</td>
                <td>false</td>
                <td class="desc">
                  <span>Add little rounded corners.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import Code from "../Code.vue";
  import PinterestIcon from "@/components/icons/ButtonPinterestIcon.vue";

  const url = window.location.href;
  const code = `
    <PinterestIcon
      description="..."
      url="..."
      mediaUrl="..."
      isRounded
    />`
</script>