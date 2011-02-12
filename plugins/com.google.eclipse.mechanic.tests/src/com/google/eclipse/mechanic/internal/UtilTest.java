/*******************************************************************************
 * Copyright (C) 2007, Google Inc.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *******************************************************************************/

package com.google.eclipse.mechanic.internal;

import junit.framework.TestCase;

import java.util.Arrays;

/**
 * Tests for Util.
 * 
 * @author smckay@google.com (Steve McKay)
 */
public class UtilTest extends TestCase {

  public void testUnquote() {

    // test without embedded quotes
    assertEquals("foo", Util.unquote("\"foo\""));

    // test with embedded quotes
    assertEquals("b\"ar", Util.unquote("\"b\"ar\""));

  }

  public void testUnquoteNullThrowsNullPointerException() {
    try {
      Util.unquote(null);
      fail("unquote should have thrown a NullPointerException.");
    } catch (NullPointerException expected) {
      // as expected
    }
  }

  public void testJoin() {
    String[] vals = {"foo", "bar"};
    assertEquals("foo,bar", Util.join(",", vals));

    assertEquals("", Util.join("x", new String[] {}));
    assertEquals("a", Util.join("x", new String[] {"a"}));
    assertEquals("axb", Util.join("x", new String[] {"a", "b"}));
  }

  public void testSplit() {
    assertArray(Util.split("", ":"));
    assertArray(Util.split("a", ":"), "a");
    assertArray(Util.split("axb", "x"), "a", "b");
    assertArray(Util.split("aaxbb", "x"), "aa", "bb");
    assertArray(Util.split("axbx", "x"), "a", "b");
    assertArray(Util.split("xabx", "x"), "", "ab");
  }

  public void testSplit_multicharDelimiter() {
    assertArray(Util.split("", "::"));
    assertArray(Util.split("a", "::"), "a");
    assertArray(Util.split("a::b", "::"), "a", "b");
    assertArray(Util.split("a::b::", "::"), "a", "b");
    assertArray(Util.split("xxabxx", "xx"), "", "ab");
  }

  // This test validates that split and join work as inversions of one another.
  public void testSplitAndJoin() {
    validateSplitAndJoin("aa::bb", "::");
    validateSplitAndJoin("axb", "x");
    validateSplitAndJoin("", "x");
    validateSplitAndJoin("a", "x");
  }

  // These are cases where the match is inexact, but unsurprising.
  // (e.g. Util.join skips empty strings). Joiner it aint'. :)
  public void testSplitAndJoin_InexactMatches() {
    validateSplitAndJoin(":aa::bb", ":", "aa::bb");
    validateSplitAndJoin("::aa::bb", "::", "aa::bb");
  }

  private void validateSplitAndJoin(String source, String delimiter) {
    validateSplitAndJoin(source, delimiter, source);
  }

  private void validateSplitAndJoin(String source, String delimiter, String expected) {
    String[] split = Util.split(source, delimiter);
    String join = Util.join(delimiter, split);
    assertEquals(expected, join);
  }

  public void testCheckNotNull() {
    Util.checkNotNull(new Object(), "Happy camper.");
    try {
      Util.checkNotNull(null, "Sour puss.");
      fail("checkNotNull should have throw NPE.");
    } catch (NullPointerException expected) {
      // as expected
    }
  }

  public void testCheckArgument() {
    Util.checkArgument(true, "Happy camper.");
    try {
      Util.checkArgument(false, "Sour puss.");
      fail("checkArgument should have throw IAE.");
    } catch (IllegalArgumentException expected) {
      // as expected
    }
  }

  public void testCheckState() {
    Util.checkState(true, "Happy camper.");
    try {
      Util.checkState(false, "Sour puss.");
      fail("checkState should have throw IAE.");
    } catch (IllegalStateException expected) {
      // as expected
    }
  }

  private void assertArray(String[] actual, String... expected) {
    if (!Arrays.deepEquals(expected, actual)) {
      fail("Expected " + Arrays.deepToString(expected) + " Actual " + Arrays.deepToString(actual));
    }
  }
}