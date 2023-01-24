<template>
  <div id="copy" class="p-8 bg-copy/5">
    <h3 class="text-copy mb-4">Copy</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="w-full">
        <h4 class="mb-3 font-medium">Usage</h4>
        <ButtonCopy
          text="Copy"
          isRounded
          hasIcon
          class="mb-4"
        />
        <Code :code="code" language="html"/>
      </div>
      <div class="w-full">
        <h4 class="mb-2 font-medium">Props</h4>
        <p class="mb-2">With <span class="text-red-500">*</span> is required.</p>
        <p class="mb-3">Just click the button to copy the URL.</p>
        <div class="table-container">
          <table >
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
                <td>text<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>Add text</td>
                <td class="desc">
                  <span>The text of the button/link.</span>
                </td>
              </tr>
              <tr>
                <td>url</td>
                <td>String</td>
                <td>Empty</td>
                <td class="desc">
                  <span>Add the url if you want.</span>
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
              <tr>
                <td>hasIcon</td>
                <td>Boolean</td>
                <td>false</td>
                <td class="desc">
                  <span>Add the copy icon.</span>
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
import ButtonCopy from "@/components/buttons/ButtonCopy.vue";
const code = `
  <ButtonCopy
    text="..."
    url="..."
    isRounded
    hasIcon
  />`
</script>