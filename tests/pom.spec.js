const { test, expect } = require('@playwright/test')
import { CreateRoom } from '../pages/createRoom'
import { DeleteRoom } from '../pages/DeleteRoom'
import { LoginPage } from '../pages/LoginPage'
import { UpdateRoom } from '../pages/UpdateRoom'
import { ViewRoomList } from '../pages/ViewRoomList'

test.beforeEach('Login Test', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.goto()
  await Login.login('admin', 'password')
  await page.waitForTimeout(3000)
})

test('Create a Room and Validate it', async ({ page }) => {

  const room = new CreateRoom(page)
  await room.createroom()
  await page.waitForTimeout(3000)
  await room.validate_room()
  await page.waitForTimeout(3000)
})

test('Update a Room and Validate it', async ({ page }) => {

  const update = new UpdateRoom(page)
  await update.updateroom()
  await page.waitForTimeout(3000)
  await update.validate_updateroom()
  await page.waitForTimeout(3000)
})

test('Room List Validation', async ({ page }) => {

  const roomlist = new ViewRoomList(page)
  await page.waitForTimeout(3000)
  await roomlist.validate_roomlist()
  await page.waitForTimeout(3000)
})

test('Delete a Room and Validate it', async ({ page }) => {

  const del = new DeleteRoom(page)
  await del.deleteroom()
  await page.waitForTimeout(3000)
  await del.validate_deleteroom()
  await page.waitForTimeout(3000)
})